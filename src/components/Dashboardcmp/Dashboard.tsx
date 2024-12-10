import React from "react";
import TopMoments from "./TopMoments";
import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./StatCard";
import DashboardCharts from "./DashboardCharts";

const DashboardCmp: React.FC = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-full">
          <DashboardHeader/>
          <DashboardStats/>
          {/* <DashboardCharts/> */}
          </div>
        <div><TopMoments/></div>
      </div>
    </>
  );
};

export default DashboardCmp;
