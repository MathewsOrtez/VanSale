import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { LuFileClock } from "react-icons/lu";
import { RiUserSettingsLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import planDetailsImg from "../../assets/plan_details_photo.png";
import { IoSettingsOutline } from "react-icons/io5";
const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );
  const [selectedRoute, setSelectedRoute] = useState<string>("");

  const planDetails = [
    "You're currently using the free plan. Your plan will expire in 10 days",
  ];

  const menuItems = [
    {
      label: "Dashboard",
      icon: <MdDashboard className="w-6 h-6" />,
      link: "/",
    },
    {
      label: "Masters",
      icon: <BsFileEarmarkPlus className="w-6 h-6" />,
      dropdown: [
        { label: "Outlet/Van", link: "/" },
        { label: "Tax", link: "/taxmaster" },
        { label: "Unit", link: "/" },
        { label: "Item Group", link: "/itemgroupmaster" },
        { label: "Item", link: "/" },
        { label: "State", link: "/statemaster" },
        { label: "Branch", link: "/branchmaster" },
        { label: "Customer", link: "/" },
        { label: "Route", link: "/routemaster" },
        { label: "Sundry Charges", link: "/" },
      ],
    },
    {
      label: "Transaction",
      icon: <LuFileClock className="w-6 h-6" />,
      dropdown: [
        { label: "Sales Ordering", link: "/" },
        { label: "Sales Invoice", link: "/" },
        { label: "Return", link: "/" },
        { label: "Replace", link: "/" },
        { label: "Receipt", link: "/" },
      ],
    },
    {
      label: "User Management",
      icon: <RiUserSettingsLine className="w-6 h-6" />,
      dropdown: [
        { label: "User Creation", link: "/" },
        { label: "User Rights", link: "/" },
      ],
    },
    {
      label: "Settings",
      icon: <IoSettingsOutline className="w-6 h-6" />,
      dropdown: [
        { label: "User-Van Linking", link: "/" },
        { label: "Van-Route Linking", link: "/" },
        { label: "Route-Customer Linking", link: "/" },
        { label: "Promotion Settings", link: "/" },
        { label: "Features", link: "/" },
        { label: "Route Scheduling", link: "/" },
        { label: "Price List", link: "/" },
      ],
    },
  ];

  const handleDropdownClick = (label: string) => {
    setOpenDropdowns((prev) => ({
      [label]: !prev[label],
    }));
  };

  const handleNavigate = (link: string) => {
    setSelectedRoute(link);
    navigate(link);
    setOpenDropdowns({});
  };

  return (
    <div className="bg-[#25add7] text-[#F9F7F6] w-[255px] h-full font-thin flex flex-col py-4 shadow-xl">
      <div className="flex flex-col relative ">
        {menuItems.map((item, index) => (
          <div key={index} className="flex flex-col relative ">
            {/* Main Menu Item */}
            <div
              onClick={() =>
                item.dropdown
                  ? handleDropdownClick(item.label)
                  : handleNavigate(item.link || "")
              }
              className={`flex items-center p-2 w-[215px] h-[39px] mx-4 my-1 justify-between  cursor-pointer rounded-md  ${
                selectedRoute === item.link
                  ? "bg-white text-black "
                  : ""} ${
                   openDropdowns[item.label]
                    ? "bg-white text-black"
                    : ""}`}
            >
              <div className="flex justify-start gap-2">
                <p>{item.icon}</p>
                <p>{item.label}</p>
              </div>
              {item.dropdown && (
                <>
                  {openDropdowns[item.label] ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowForward />
                  )}
                </>
              )}
            </div>

            {/* Dropdown Menu */}
            {item.dropdown && openDropdowns[item.label] && (
              <div className={`mx-4  absolute   top-12 z-10 w-[217px]  flex flex-col justify-start items-start gap-2 bg-white text-[#434343] rounded-md p-2 animate-flip-down animate-once`}>
                {item.dropdown.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    onClick={() => handleNavigate(subItem.link)}
                    className=" text-sm cursor-pointer px-2 hover:text-gray-800 hover:bg-gray-100 hover:shadow-md  w-full rounded-md"
                  >
                    {subItem.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="w-[210px] h-[249px] mx-auto mt-6 bg-[#00648a] text-xs rounded-md">
        {planDetails.map((item, index) => (
          <div key={index} className="flex-col justify-center gap-2 px-4 py-4">
            <p className="text-base font-normal">Plan Details</p>
            <p className="font-thin text-xs">{item}</p>

            <div className="flex justify-center my-2">
              <img src={planDetailsImg} alt="Plan details" />
            </div>

            <div className="flex justify-center">
              <button
                className="py-2 px-6 bg-black text-white rounded-md hover:border"
                onClick={() => navigate("/upgradenow")}
              >
                Upgrade Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center font-semibold w-[215px] h-[35px] mx-auto">
        <div className="w-full my-2">
          <button className="bg-white text-black py-1 px-7 w-full rounded-md border border-black">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
