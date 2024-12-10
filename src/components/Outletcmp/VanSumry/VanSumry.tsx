import React from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SalesIcon from "../../../assets/Outlet Summary/SaleReturnIcon.png";
import ReturnIcon from "../../../assets/Outlet Summary/SaleReturnIcon.png";
import ReplaceIcon from "../../../assets/Outlet Summary/ReplaceIcon.png";
import OrderIcon from "../../../assets/Outlet Summary/OrderIcon.png";
import ReceiptIcon from "../../../assets/Outlet Summary/SaleReturnIcon.png";
import TrendUpIcon from "../../../assets/Outlet Summary/TrendUpIcon.png";
import TrendDownIcon from "../../../assets/Outlet Summary/TrendDownIcon.png";
import VanSumryCharts from "./VanSumryCharts";
import StartTimeIcon from "../../../assets/VanSummary/StartTimeIcon.png";
import EndTimeIcon from "../../../assets/VanSummary/EndTimeIcon.png";
import StartKmIcon from "../../../assets/VanSummary/StartKmIcon.png";
import EndKmIcon from "../../../assets/VanSummary/EndKmIcon.png";
import StatusIcon from "../../../assets/VanSummary/StatusIcon.png";
import VanSumryTable from "./VanSumryTable";
const VanSumry: React.FC = () => {
  const navigate = useNavigate();

  const SummaryReport = [
    {
      label: "Total Sales",
      total: 12,
      amount: "₹500",
      icon: SalesIcon,
      trend: "up",
    },
    {
      label: "Return",
      total: 10,
      amount: "₹350",
      icon: ReturnIcon,
      trend: "down",
    },
    {
      label: "Replace",
      total: 12,
      icon: ReplaceIcon,
    },
    {
      label: "Order",
      total: 10,
      amount: "₹350",
      icon: OrderIcon,
      trend: "up",
    },
    {
      label: "Receipt",
      total: 14,
      amount: "₹350",
      icon: ReceiptIcon,
      trend: "down",
    },
  ];

  const VanDetails = [
    {
      starttime: "10:10 am",
      endtime: "10:10 am",
      startingkm: 25,
      ending: 65,
      status: "completed",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 my-4 gap-4">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-xl font-semibold">Summary</h1>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-end">
            <button onClick={() => navigate("/outletvan")}>
              <IoMdClose className="w-8 h-8" />
            </button>
          </div>
          <div>
            <button className="text-xl font-medium text-[#5e5e5e]">
              Outlet - {new Date().toLocaleDateString("en-GB")}
            </button>
          </div>
        </div>
      </div>
     
     {/* Van Details */}
      <div>
        {VanDetails.map((item, index) => {
          return (
            <div key={index} className="flex items-center justify-around gap-7 w-auto my-7 mx-4 shadow-lg p-2 border border-gray-50 rounded-md">
              <div className="flex gap-2">
                <img src={StartTimeIcon} alt="StartTimeIcon"  className="w-5 h-5"/>
                <h1 className="text-[#9b9b9b]"><span className="text-black">Start Time:</span> {item.starttime}</h1>
              </div>
              <div className="flex gap-2">
                <img src={EndTimeIcon} alt="EndTimeIcon" className="w-5 h-5"/>
                <h1 className="text-[#9b9b9b]"><span className="text-black">End Time:</span> {item.endtime}</h1>
              </div>
              <div className="flex gap-2">
                <img src={StartKmIcon} alt="StartKmIcon" className="w-5 h-5"/>
                <h1 className="text-[#9b9b9b]"><span className="text-black">Start Km:</span> {item.startingkm}</h1>
              </div>
              <div className="flex gap-2">
                <img src={EndKmIcon} alt="EndKmIcon" className="w-5 h-5" />
                <h1 className="text-[#9b9b9b]"><span className="text-black">End Km:</span> {item.ending}</h1>
              </div>
              <div className="flex gap-2">
                <img src={StatusIcon} alt="StatusIcon" className="w-5 h-5" />
                <h1 className="text-[#9b9b9b]"><span className="text-black">Status:</span> {item.status}</h1>
              </div>
            </div>
          );
        })}
      </div>     

      {/* Summary Report */}
      <div className="flex gap-6 mx-4 justify-center">
        {SummaryReport.map((item, index) => {
          return (
            <div
              className="flex flex-col flex-wrap  gap-2 bg-[#e4f4ff] rounded-xl px-4 py-4  w-full border border-[#b9e3ff] shadow-md"
              key={index}
            >
              <div className="flex justify-between items-center gap-7 ">
                <div className="flex gap-2 items-center flex-wrap">
                  <div className="p-2 bg-[#61aee1] rounded-full">
                    <img src={item.icon} alt="" />
                  </div>
                  <div>
                    <h1 className="text-sm font-medium text-[#616568]">
                      {item?.label}
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-medium text-[#7e7e7e]">
                    {item?.total}
                  </h1>
                </div>
              </div>
              <div className="flex gap-2 items-center justify-end">
                {item?.trend && (
                  <img
                    src={item.trend === "up" ? TrendUpIcon : TrendDownIcon}
                    alt="TrendIcon"
                  />
                )}
                <h1 className="text-xl font-medium text-black">
                  {item.amount}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mx-4 my-7">
        <VanSumryCharts />
      </div>
      <div className="mx-4 my-7">
        <VanSumryTable/>
      </div>
    </>
  );
};

export default VanSumry;
