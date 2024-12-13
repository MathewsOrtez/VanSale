import { InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../../assets/SearchIcon.png";
import { useParams } from "react-router-dom";
import { useMissedCustomerContext } from "../../../context/MissedCustomersContext";
import MissedCustomerVanTable from "./MissedCustomerVanTable";
const MissedCustomerVanHeader: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { id } = useParams<{ id: string }>();
  const { missedCustomerData } = useMissedCustomerContext();
  const van = missedCustomerData.find(
    (item) => item.srl === parseInt(id || "0")
  );
  const tableData = van ? [van] : [];
  console.log(tableData);
  console.log(id);

  const handleRowClick = (type: string, id: number , route: string) => {
    if (type === "van") {
      navigate(`/missedcustomersvaninner/${id}/${type}/${route}`);
    }
  };

  const filteredData = tableData.map((row) => ({
    ...row,
    customers: row.customers?.filter((customer) =>
      customer.route?.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 my-4 gap-4">
        <div className="flex flex-col gap-5 ">
          <div>
            <h1 className="text-xl font-semibold">Missed Customers</h1>
          </div>
          <div className="flex items-center border hover:border-gray-600 rounded-md " style={{backgroundColor:"white"}}>
            {/* Search Icon */}
            <InputAdornment position="start" className="p-2">
              <img src={SearchIcon} alt="Search" />
            </InputAdornment>
            <input
              type="text"
              placeholder="Search by route..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2  border-none outline-none rounded-md w-[332px] h-[32px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-end">
            <button onClick={() => navigate("/missedcustomers")}>
              <IoMdClose className="w-6 h-6" />
            </button>
          </div>
          <div>
            <button className="text-md font-medium text-[#5e5e5e]">
            {van?.name} - {new Date().toLocaleDateString("en-GB")}
            </button>
          </div>
        </div>
      </div>
      {/* Outlet Table */}
      <div>
        <MissedCustomerVanTable data={filteredData as any} onRowClick={handleRowClick} />
      </div>
    </>
  );
};

export default MissedCustomerVanHeader;
