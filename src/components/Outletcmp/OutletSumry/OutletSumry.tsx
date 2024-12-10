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
import OutletSumryCharts from "./OutletSumryCharts";
const OutletSumry: React.FC = () => {
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
              <IoMdClose className="w-6 h-6" />
            </button>
          </div>
          <div>
            <button className="text-md font-medium text-[#5e5e5e]">
              Outlet - {new Date().toLocaleDateString("en-GB")}
            </button>
          </div>
        </div>
      </div>
      {/* Summary Report */}
      <div className="flex gap-6 mx-4 justify-center">
        {SummaryReport.map((item, index) => {
          return (
            <div
              className="flex flex-col flex-wrap  gap-2  bg-[#e4f4ff] rounded-xl px-4 py-4  w-full border border-[#b9e3ff] shadow-md"
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
        <OutletSumryCharts />
      </div>
    </>
  );
};

export default OutletSumry;
