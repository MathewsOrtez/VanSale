import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Template: React.FC = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 bg-white z-50">
        <Header />
      </div>
      <div className="flex">
        <div className="flex-col fixed z-50">
          <Sidebar />
        </div>
        <main className="w-full ml-[16rem]   bg-[#fafafa] ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Template;
