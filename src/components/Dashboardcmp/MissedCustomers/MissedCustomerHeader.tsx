import { InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../../assets/SearchIcon.png";
import MissedCustomerTable from "./MissedCustomerTable";
import { useMissedCustomerContext } from "../../../context/MissedCustomersContext";
const MissedCustomerHeader: React.FC = () => {
  const navigate = useNavigate();
  const { missedCustomerData } = useMissedCustomerContext();
  const [searchQuery, setSearchQuery] = useState("");
  // Row Click Route
  const handleRowClick = (type: string, id: number) => {
    if (type === "van") {
      navigate(`/missedcustomersvan/${id}`);
    }
  };
//  Filter data based on search query
 const filteredData = missedCustomerData.filter((entry) => {
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
            <h1 className="text-xl font-semibold">Missed Customers</h1>
          </div>
          <div className="flex items-center border hover:border-gray-600 rounded-md " style={{backgroundColor:"white"}}>
            {/* Search Icon */}
            <InputAdornment position="start" className="p-2"  >
              <img src={SearchIcon} alt="Search Icon" />
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
        <MissedCustomerTable
          data={filteredData}
          onRowClick={handleRowClick}
        />
      </div>
    </>
  );
};

export default MissedCustomerHeader;
