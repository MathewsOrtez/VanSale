import React from "react";
import Uparrow from "../../assets/uparrow.png";
import Downarrow from "../../assets/downarrow.png";
import { useNavigate } from "react-router-dom";

// Define interface for props passed to StatCard
interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  amount?: string;
  color: string;
  trendIcon?: "up" | "down";
  link: string;
}

// StatCard component
const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  amount,
  color,
  trendIcon,
  link,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`rounded-2xl border  border-${color} p-4  flex flex-col justify-between gap-3  hover:cursor-pointer`}
      style={{ minWidth: "100px", height: "91px", backgroundColor: color }}
      onClick={() => navigate(`${link}`)}
    >
      <div className="flex justify-between items-center  text-gray-600">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-xl font-semibold">{value}</span>
      </div>
      {description && (
        <div className="text-xs text-gray-900 mt-1 text-center">
          {description}
        </div>
      )}
      {amount && (
        <div className="flex justify-center items-center gap-4 ">
          {trendIcon && (
            <span
              className={`${
                trendIcon === "up" ? (
                  <img src={Uparrow} />
                ) : (
                  <img src={Downarrow} />
                )
              } text-sm`}
            >
              {trendIcon === "up" ? (
                <img src={Uparrow} />
              ) : (
                <img src={Downarrow} />
              )}
            </span>
          )}
          <span className="font-semibold text-lg">{amount}</span>
        </div>
      )}
    </div>
  );
};

// Define the types for the stats array
interface Stat {
  title: string;
  value: string | number;
  description?: string;
  amount?: string;
  color: string;
  trendIcon?: "up" | "down";
  link: string;
}

const DashboardStats: React.FC = () => {
  // Explicitly define the type of the stats array
  const stats: Stat[] = [
    {
      title: "Outlet/Van",
      value: 4,
      color: "#ffe0cc",
      link: "/outletvan",
    },
    {
      title: "Customers Covered",
      value: 78,
      description: "Van 40   Outlet 30   Both 08",
      color: "#d3f7ed",
      link: "/customercovered",
    },
    {
      title: "Missed Customers",
      value: 14,
      color: "#e2dbfa",
      link: "/missedcustomers",
    },
    {
      title: "Unbilled Orders",
      value: 14,
      amount: "₹4500.00",
      trendIcon: "up",
      color: "#e1f3ff",
      link: "/unbilledorders",
    },
    {
      title: "Sales",
      value: 22,
      amount: "₹5500.00",
      trendIcon: "down",
      color: "#fae1f4",
      link: "/sales",
    },
    {
      title: "Orders",
      value: 14,
      amount: "₹2000.00",
      trendIcon: "up",
      color: "#ebeef3",
      link: "/orders",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-4 ">
      {/* Explicitly pass the props */}
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats;
