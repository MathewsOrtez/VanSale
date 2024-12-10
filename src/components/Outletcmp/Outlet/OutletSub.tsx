import { InputAdornment } from "@mui/material";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import OutletTable from "./OutletTable";
const OutletSub : React.FC = () => {
    const navigate = useNavigate();

    const OutletData = [
        {srl :1, name: "Outlet 1" ,type : "outlet", sales: 20,return: 20,replace: 20,order: 20,receipt: 20},
        {srl :2, name: "Van 1", type: "van", sales: 18,return: 18,replace: 18,order: 18,receipt: 18},
        {srl: 3,name: "Van 3", type: "van",sales:10,return: 10,replace: 10,order: 10,receipt: 10},
        {srl: 4,name: "Van 4", type: "van",sales: 11,return: 11,replace: 11,order: 11,receipt: 11},
    ]

    // Row Click Route
    const handleRowClick = (type: string, name: string) => {
      if (type === "outlet") {
        navigate(`/outletsummary`);
      } else if (type === "van") {
        navigate(`/van`);
      }
    };
  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 my-4 gap-4">
        <div className="flex flex-col gap-5 ">
          <div>
            <h1 className="text-xl font-semibold">Outlet/Van</h1>
          </div>
          <div className="flex items-center border border-gray-200 rounded-md ">
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
            <button onClick={() => navigate("/")}>
              <IoMdClose className="w-6 h-6" />
            </button>
          </div>
          <div>
            <button className="text-md font-medium text-[#5e5e5e]">{new Date().toLocaleDateString("en-GB")}</button>
          </div>
        </div>
      </div>
      {/* Outlet Table */}
      <div>
        <OutletTable data={OutletData} onRowClick={handleRowClick}/>
      </div>
    </>
  );
}

export default OutletSub;