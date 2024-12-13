import React from "react";
import { PolarArea } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, Title ,RadialLinearScale } from "chart.js";

// Register chart components with Chart.js
ChartJS.register( Tooltip, Legend, Title,RadialLinearScale );

const DashboardCharts: React.FC = () => {
  const data = {
    labels: ["card", "bank", "credit", "cash", "complimentary"],
    datasets: [
      {
        label: "# of Votes",
        data: [17, 19, 16, 15, 22],
        backgroundColor: [
          "#EA9010",
          "#D80032",
          "#74D8F7",
          "#9751CD",
          "#00D9C0",
        ],
        borderColor: [
          "#EA9010",
          "#D80032",
          "#74D8F7",
          "#9751CD",
          "#00D9C0",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="flex justify-between mx-4">
        <div className="w-[20rem] px-4 rounded-2xl bg-white border border-[#D9F2FA]">
          <div className="flex justify-between items-center">
            <p className="text-[#666666] text-sm">Bill Settlement</p>
            <p className="text-xl font-semibold">₹8453.00</p>
          </div>

          <div>
            <PolarArea data={data} />
          </div>
        </div>

        <div>
          <div className="flex w-[20rem] px-4 flex-col justify-center rounded-2xl bg-white border border-[#D9F2FA]">
            <div className="flex justify-between items-center">
              <p className="text-[#666666] text-sm">Total Collection Summary</p>
              <p className="text-xl font-semibold">₹8453.00</p>
            </div>
            <div className="flex justify-start">
              <p className="text-[#666666] text-xs">(Receipt and Bill)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCharts;
