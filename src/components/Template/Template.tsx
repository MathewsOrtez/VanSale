import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Template: React.FC = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex">
        <div className="flex-col">
        <Sidebar />
        </div>
        <main className="w-full bg-[#fafafa]">
         <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default Template;
