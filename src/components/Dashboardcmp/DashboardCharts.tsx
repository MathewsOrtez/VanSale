import React, { useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);

const DashboardCharts: React.FC = () => {
  const totalCollectionChartRef = useRef<any>(null);
  const billSettlementChartRef = useRef<any>(null);

  const TotalCollectionSummary = {
    head: "Total Collection Summary",
    amount: "₹350.00",
    labels: ["Cash", "Bank", "Card"],
    datasets: [
      {
        data: [70000, 170000, 170000],
        backgroundColor: ["#5b93ff", "#ffd66b", "#ff8f6b"],
        hoverBackgroundColor: ["#5b93ff", "#ffd66b", "#ff8f6b"],
        borderWidth: 0,
        borderColor: "#f5f7fd",
        borderShadowColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: 40,
        spacing: -70,
        shadowOffsetX: 3,
        shadowOffsetY: 3,
        shadowBlur: 5,
        shadowColor: "rgba(0, 0, 0, 0.3)",
      },
    ],
  };

  const BillSettlementSummary = {
    head: "Bill Settlement Summary",
    amount: "₹350.00",
    labels: ["Cash", "Credit", "Complimentary", "Bank", "Card"],
    datasets: [
      {
        data: [390, 470, 400, 450, 500],
        backgroundColor: [
          "#f9dec9",
          "#00d9c0",
          "#74d8f7",
          "#d80032",
          "#ea9010",
        ],
        hoverBackgroundColor: [
          "#f9dec9",
          "#00d9c0",
          "#74d8f7",
          "#d80032",
          "#ea9010",
        ],
      },
    ],
  };

  // Function to toggle visibility of dataset segments
  const handleLegendClick = (chartRef: any, index: number) => {
    const chart = chartRef.current;
    if (chart) {
      const meta = chart.getDatasetMeta(0);
      meta.data[index].hidden = !meta.data[index].hidden;
      chart.update();
    }
  };

  return (
    <div className="flex  flex-wrap  gap-8 px-4 py-4 ">
      {/* Bill Settlement Summary */}
      <div className="flex-1 bg-white flex-wrap rounded-xl shadow-md p-4 w-[388px] h-[404px]  border border-[#e1f4fa]">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-[#767676]">
            {BillSettlementSummary.head}
          </h3>
          <span className="text-black text-2xl font-medium">
            {BillSettlementSummary.amount}
          </span>
        </div>
        <div className="flex items-start justify-center mx-auto  gap-8 mt-4 w-[12rem] ">
          <PolarArea
            ref={billSettlementChartRef}
            data={{
              labels: BillSettlementSummary.labels,
              datasets: BillSettlementSummary.datasets,
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { display: false },
              },
            }}
          />
          {/* <div className="flex flex-col items-center gap-7">
            {BillSettlementSummary.labels.map((label, index) => (
              <div
                key={index}
                className={`flex  flex-col items-center  text-sm  cursor-pointer border rounded-full border-gary-700 border-dashed px-4 hover:bg-gray-200`}
                onClick={() => handleLegendClick(billSettlementChartRef, index)}
              >
                <span className="text-[#878787]">{label}</span>
                <span className="font-medium text-black text-sm">
                  {BillSettlementSummary.datasets[0].data[
                    index
                  ].toLocaleString()}
                </span>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Total Collection Summary */}
      <div className="flex-1 bg-white rounded-xl shadow-md p-4 border border-[#e1f4fa] ">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-[#767676]">
            {TotalCollectionSummary.head}
          </h3>
          <span className="text-black text-2xl font-medium">
            {TotalCollectionSummary.amount}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">(Receipt and Bill)</p>
        <div className="flex items-center justify-center mx-auto gap-8 mt-4 w-[12rem]">
          <Doughnut
            ref={totalCollectionChartRef}
            data={{
              labels: TotalCollectionSummary.labels,
              datasets: TotalCollectionSummary.datasets,
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { display: false },
              },
              cutout: "70%",
            }}
          />
          {/* <div className="flex flex-col items-center gap-7">
            {TotalCollectionSummary.labels.map((label, index) => (
              <div
                key={index}
                className="flex  flex-col items-center  text-sm  cursor-pointer border px-4 hover:bg-gray-200"
                onClick={() =>
                  handleLegendClick(totalCollectionChartRef, index)
                }
              >
                <span className=" font-semibold  text-black">
                  {TotalCollectionSummary.datasets[0].data[
                    index
                  ].toLocaleString()}
                </span>
                <span className="text-[#878787]">{label}</span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
