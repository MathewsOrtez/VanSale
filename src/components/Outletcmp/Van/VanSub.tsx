import { InputAdornment } from "@mui/material";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import VanTable from "./VanTable";
const VanSub:React.FC = () => {
    const navigate = useNavigate();
    const OutletData = [
        {srl :1, name: "kakkanad" ,type : "route",starttime:"10:10 am",endtime:"10:10 am", sales: 20,return: 20,replace: 20,order: 20,receipt: 20},
        {srl :2, name: "pipeline", type: "route",starttime:"12:20 pm",endtime:"12:20 pm", sales: 18,return: 18,replace: 18,order: 18,receipt: 18},
        {srl: 3,name: "kaloor", type: "route",starttime:"12:20 pm",endtime:"12:20 pm",sales:10,return: 10,replace: 10,order: 10,receipt: 10},
        {srl: 4,name: "edapalayam", type: "route",starttime:"12:10 pm",endtime:"12:20 pm",sales: 11,return: 11,replace: 11,order: 11,receipt: 11},
    ]

       // Row Click Route
       const handleRowClick = (type: string, name: string) => {
        if (type === "route") {
          navigate(`/vansummary`);
        } else if (type === "van") {
          navigate(`/van`);
        }
      };
    return (
        <>
         <div className="flex justify-between items-center px-4 py-2 my-4 gap-4">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-xl font-semibold">Outlet/Van</h1>
          </div>
          <div className="flex items-center border border-black rounded-md w-[30rem]">
            {/* Search Icon */}
            <InputAdornment position="start" className="p-2">
              <SearchIcon />
            </InputAdornment>
            <input
              type="text"
              placeholder="Search..."
              className="p-2 w-full border-none outline-none rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-end">
            <button onClick={() => navigate("/outletvan")}>
              <IoMdClose className="w-8 h-8" />
            </button>
          </div>
          <div>
            <button className="text-xl font-medium text-[#5e5e5e]">Van 1 - {new Date().toLocaleDateString("en-GB")}</button>
          </div>
        </div>
      </div>
        {/* Outlet Table */}
        <div>
        <VanTable data={OutletData} onRowClick={handleRowClick}/>
      </div>
        
        </>
    )
};  

export default VanSub