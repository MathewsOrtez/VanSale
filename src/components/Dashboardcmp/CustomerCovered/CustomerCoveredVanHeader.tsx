import React, { useState } from "react";
import { InputAdornment } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import SearchIcon from "../../../assets/SearchIcon.png";
import { useNavigate, useParams } from "react-router-dom";
import CustomerCoveredVanTable from "./CustomerCoveredVanTable";
import { useCustomerCoveredContext } from "../../../context/CustomerCoveredContext";

const CustomerCoveredVanHeader: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { id } = useParams<{ id: string }>();
  const { customerCoveredData } = useCustomerCoveredContext();

  // Find the van data based on the ID
  const van = customerCoveredData.find(
    (item) => item.srl === parseInt(id || "0")
  );
  const tableData = van ? [van] : [];

  // Handle search filtering
  const filteredData = tableData.map((row) => ({
    ...row,
    customers: row.customers?.filter(
      (customer) =>
        customer.route?.toLowerCase().includes(searchQuery.toLowerCase()) 
    ),
  }));

  const handleRowClick = (type: string, id: number, route: string) => {
    if (type === "van") {
      navigate(`/customercoveredvaninner/${id}/${type}/${route}`);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 my-4 gap-4">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-xl font-semibold">Customers Covered</h1>
          </div>
          <div className="flex items-center border hover:border-gray-600 rounded-md" style={{backgroundColor:"white"}}>
            <InputAdornment position="start" className="p-2">
              <img src={SearchIcon} alt="Search Icon" />
            </InputAdornment>
            <input
              type="text"
              placeholder="Search by route..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 border-none outline-none rounded-md w-[332px] h-[32px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-end">
            <button onClick={() => navigate("/customercovered")}>
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
        <CustomerCoveredVanTable
          data={filteredData as any}
          onRowClick={handleRowClick}
        />
      </div>
    </>
  );
};

export default CustomerCoveredVanHeader;
