import { InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../../assets/SearchIcon.png";
import CustomerCoveredOutletTable from "./CustomerCoveredOutletTable";
import { useParams } from "react-router-dom";
import { useCustomerCoveredContext } from "../../../context/CustomerCoveredContext";

const CustomerCoveredOutletHeader: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { customerCoveredData } = useCustomerCoveredContext();
  const outlet = customerCoveredData.find(
    (item) => item.srl === parseInt(id || "0")
  );
  const tableData = outlet ? [outlet] : [];

  // Filtered Data
  const filteredData = tableData.map((row) => ({
    ...row,
    customers: row.customers?.filter((customer) =>
      customer.customername?.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 my-4 gap-4">
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-semibold">Customers Covered</h1>
          <div className="flex items-center border hover:border-gray-600 rounded-md" style={{backgroundColor:"white"}}>
            <InputAdornment position="start" className="p-2">
              <img src={SearchIcon} alt="Search Icon" />
            </InputAdornment>
            <input
              type="text"
              placeholder="Search by customer name..."
              className="p-2 border-none outline-none rounded-md w-[332px] h-[32px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col justify-end items-end gap-5">
          <button onClick={() => navigate("/customercovered")}>
            <IoMdClose className="w-6 h-6" />
          </button>
          <button className="text-md font-medium text-[#5e5e5e]">
            {outlet?.name} - {new Date().toLocaleDateString("en-GB")}
          </button>
        </div>
      </div>
      <CustomerCoveredOutletTable data={filteredData} />
    </>
  );
};

export default CustomerCoveredOutletHeader;
