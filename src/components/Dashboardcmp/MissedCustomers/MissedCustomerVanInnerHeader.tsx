import React from "react";
import { InputAdornment } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useMissedCustomerContext } from "../../../context/MissedCustomersContext";
import MissedCustomerVanInnerTable from "./MissedCustomerVanInnerTable";
import SearchIcon from "@mui/icons-material/Search";
const MissedCustomerVanInnerHeader: React.FC = () => {
  const navigate = useNavigate();
  const { id, type, route } = useParams<{ id: string; type: string; route: string }>();
  const { missedCustomerData } = useMissedCustomerContext();

  // Find the van based on type, id, and route
  const van = missedCustomerData.find(
    (item) =>
      item.type === type &&
      item.customers.some(
        (customer) =>
          customer.route === route &&
          customer.routecustomer?.filter((routecustomer) => routecustomer.srl === parseInt(id || "0"))
      )
  );

  // Get the relevant customers
  const matchingCustomer = van?.customers.find((customer) => customer.route === route);
  const tableData = matchingCustomer?.routecustomer || [];

  console.log(tableData);

  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 my-4 gap-4">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-xl font-semibold">Missed Customers</h1>
          </div>
          <div className="flex items-center border border-gray-600 rounded-md">
            <InputAdornment position="start" className="p-2">
              <SearchIcon />
            </InputAdornment>
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border-none outline-none rounded-md w-[332px] h-[32px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-end">
            <button onClick={() => navigate(`/missedcustomersvan/${id}`)}>
              <IoMdClose className="w-6 h-6" /> 
            </button>
          </div>
          <div>
            <button className="text-md font-medium text-[#5e5e5e]">
              {van?.name}, {route} Route - {new Date().toLocaleDateString("en-GB")}
            </button>
          </div>
        </div>
      </div>
      <div>
        <MissedCustomerVanInnerTable data={tableData} />
      </div>
    </>
  );
};

export default MissedCustomerVanInnerHeader;
