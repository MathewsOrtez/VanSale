import { InputAdornment } from "@mui/material";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useParams } from "react-router-dom";
import CustomerCoveredVanTable from "./CustomerCoveredVanTable";
import { useCustomerCoveredContext } from "../../../context/CustomerCoveredContext";
const CustomerCoveredVanHeader: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { customerCoveredData } = useCustomerCoveredContext();
  const van = customerCoveredData.find(
    (item) => item.srl === parseInt(id || "0")
  );
  const tableData = van ? [van] : [];
  console.log(tableData);
  console.log(id);

  const handleRowClick = (type: string, id: number , route: string) => {
    if (type === "van") {
      navigate(`/customercoveredvaninner/${id}/${type}/${route}`);
    }
  };
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
              className="p-2  border-none outline-none rounded-md w-[332px] h-[32px]"
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
        <CustomerCoveredVanTable data={tableData as any} onRowClick={handleRowClick} />
      </div>
    </>
  );
};

export default CustomerCoveredVanHeader;
