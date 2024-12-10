import React, { useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const VanSumryCharts: React.FC = () => {
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
        shadowColor: 'rgba(0, 0, 0, 0.3)',

      },
    ],
  };

  const BillSettlementSummary = {
    head: "Bill Settlement Summary",
    amount: "₹350.00",
    labels: ["Cash", "Credit", "Complimentary", "Bank", "Card"],
    datasets: [
      {
        data: [70000, 700000, 170000, 170000, 170000],
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
        borderWidth: 1, 
        borderColor: "#ffffff", 
        borderRadius: 20, 
        spacing: 15, 
        shadowOffsetX: 3,
        shadowOffsetY: 3,
        shadowBlur: 5,  
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        
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
      {/* Total Collection Summary */}
      <div className="flex-1 bg-white rounded-xl shadow-md p-6 border border-[#e1f4fa] ">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-[#767676]">
            {TotalCollectionSummary.head}
          </h3>
          <span className="text-[#d2bf11] text-2xl font-medium">
            {TotalCollectionSummary.amount}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">(Receipt and Bill)</p>
        <div className="flex items-center justify-center mx-auto gap-8 mt-4 w-[15rem]">
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
          <div>
            {TotalCollectionSummary.labels.map((label, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm mb-2 cursor-pointer"
                onClick={() =>
                  handleLegendClick(totalCollectionChartRef, index)
                }
              >
                <span
                  className="block w-4 h-4 rounded-full"
                  style={{
                    backgroundColor:
                      TotalCollectionSummary.datasets[0].backgroundColor[index],
                  }}
                ></span>
                <span className="text-[#878787]">{label}</span>
                <span
                  className="ml-auto font-medium p-2 rounded text-white"
                  style={{
                    backgroundColor:
                      TotalCollectionSummary.datasets[0].backgroundColor[index],
                  }}
                >
                  {TotalCollectionSummary.datasets[0].data[
                    index
                  ].toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bill Settlement Summary */}
      <div className="flex-1 bg-white flex-wrap rounded-xl shadow-md p-6  border border-[#e1f4fa]">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-[#767676]">
            {BillSettlementSummary.head}
          </h3>
          <span className="text-[#d2bf11] text-2xl font-medium">
            {BillSettlementSummary.amount}
          </span>
        </div>
        <div className="flex items-center justify-center mx-auto  gap-8 mt-4 w-[15rem]">
          <Doughnut
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
              cutout: "70%",
            }}
          />
          <div>
            {BillSettlementSummary.labels.map((label, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm mb-2 cursor-pointer"
                onClick={() => handleLegendClick(billSettlementChartRef, index)}
              >
                <span
                  className="block w-4 h-4 rounded-full"
                  style={{
                    backgroundColor:
                      BillSettlementSummary.datasets[0].backgroundColor[index],
                  }}
                ></span>
                <span className="text-[#878787]">{label}</span>
                <span
                  className="ml-auto font-medium p-2 rounded text-white"
                  style={{
                    backgroundColor:
                      BillSettlementSummary.datasets[0].backgroundColor[index],
                  }}
                >
                  {BillSettlementSummary.datasets[0].data[
                    index
                  ].toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VanSumryCharts;
