import { InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CustomerCoveredTable from "./CustomerCoveredTable";
import { useCustomerCoveredContext } from "../../../context/CustomerCoveredContext";
const CustomerCoveredHeader: React.FC = () => {
  const navigate = useNavigate();
  const { customerCoveredData } = useCustomerCoveredContext();
  const [searchQuery, setSearchQuery] = useState("");
  // Row Click Route
  const handleRowClick = (type: string, id: number) => {
    if (type === "outlet") {
      navigate(`/customercoveredoutlet/${id}`);
    } else if (type === "van") {
      navigate(`/customercoveredvan/${id}`);
    }
  };
//  Filter data based on search query
 const filteredData = customerCoveredData.filter((entry) => {
  const query = searchQuery.toLowerCase();
  return (
    entry.name.toLowerCase().includes(query) 
  );
});

  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 my-4 gap-4">
        <div className="flex flex-col gap-5 ">
          <div>
            <h1 className="text-xl font-semibold">Customers Covered</h1>
          </div>
          <div className="flex items-center border border-gray-600 rounded-md ">
            {/* Search Icon */}
            <InputAdornment position="start" className="p-2">
              <SearchIcon />
            </InputAdornment>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2  border-none outline-none rounded-md w-[332px] h-[32px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-end">
            <button onClick={() => navigate("/")}>
              <IoMdClose className="w-6 h-6" />
            </button>
          </div>
          <div>
            <button className="text-md font-medium text-[#5e5e5e]">
              {new Date().toLocaleDateString("en-GB")}
            </button>
          </div>
        </div>
      </div>
      {/* Outlet Table */}
      <div>
        <CustomerCoveredTable
          data={filteredData}
          onRowClick={handleRowClick}
        />
      </div>
    </>
  );
};

export default CustomerCoveredHeader;