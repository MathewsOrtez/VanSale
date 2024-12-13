import React, { useState } from "react";
import { InputAdornment } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useCustomerCoveredContext } from "../../../context/CustomerCoveredContext";
import CustomerCoveredVanInnerTable from "./CustomerCoveredVanInnerTable";
import SearchIcon from "../../../assets/SearchIcon.png";

const CustomerCoveredVanInnerHeader: React.FC = () => {
  const navigate = useNavigate();
  const { id, type, route } = useParams<{ id: string; type: string; route: string }>();
  const { customerCoveredData } = useCustomerCoveredContext();
  const [searchQuery, setSearchQuery] = useState("");

  // Find the van based on type, id, and route
  const van = customerCoveredData.find(
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

  // Filter data based on search query
  const filteredData = tableData.filter((row) =>
    row.customername.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.srl.toString().includes(searchQuery)
  );

  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 my-4 gap-4">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-xl font-semibold">Customers Covered</h1>
          </div>
          <div className="flex items-center border hover:border-gray-600 rounded-md" style={{backgroundColor:"white"}}>
            <InputAdornment position="start" className="p-2">
              <img src={SearchIcon} alt="" />
            </InputAdornment>
            <input
              type="text"
              placeholder="Search by customer name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 border-none outline-none rounded-md w-[332px] h-[32px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-end">
            <button onClick={() => navigate(-1)}>
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
        <CustomerCoveredVanInnerTable data={filteredData} />
      </div>
    </>
  );
};

export default CustomerCoveredVanInnerHeader;
