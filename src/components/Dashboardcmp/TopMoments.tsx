import React from "react";
import topmomentsicon from "../../assets/Topmomentsicon.png";
import badge1 from "../../assets/badge1.png";
import badge2 from "../../assets/badge2.png";
import badge3 from "../../assets/badge3.png";
import badge4 from "../../assets/badge4.png";
const TopMoments: React.FC = () => {
  const sellingItems = [
    {
      badge: badge1,
      item: "Mango Pickles",
      count: "454",
    },
    {
      badge: badge2,
      item: "Sambar Powder",
      count: "451",
    },
    {
      badge: badge3,
      item: "Kiran Milks",
      count: "230",
    },
    {
      badge: badge4,
      item: "Sd Powder",
      count: "230",
    },
  ];
  const Headeritems = [
    {
      header: "Top moments",
      label:
        "Highlighting your top achievement and standout moments, these milestones reflect your exceptional performance with the Vansale platform.",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center w-[350px] h-[843px] px-4 py-4 shadow-xl">
        <div>
          {Headeritems.map((item, index) => {
            return (
              <div key={index}>
                <p className="text-xl font-semibold">{item.header}</p>
                <p className="font-thin italic text-sm">{item.label}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center my-2">
          <img src={topmomentsicon} />
        </div>
        <div className="flex flex-col justify-center gap-2 ">
          <div className="flex flex-col justify-center   bg-[#fafafa] p-2 rounded-md gap-4 border">
            <div className="flex justify-between ">
              <p className="font-semibold">Route</p>
              <p className="text-sm text-gray-400">12/08/2024</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Bill - 22</p>
              <p className="text-[#efa72c]">₹5454.00</p>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[#fafafa] p-2 rounded-md gap-4 border">
            <div className="flex justify-between">
              <p className="font-semibold">Route</p>
              <p className="text-sm text-gray-400">12/08/2024</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Bill - 69</p>
              <p className="text-[#efa72c]">₹15454.00</p>
            </div>
          </div>
        </div>
        <div className="my-4">
          <hr />
        </div>
        <div className="flex flex-col justify-center py-3  gap-7 px-4 bg-[#e1f3ff] rounded-md">
          <div>
            <div className="my-2">Top Selling items</div>
            <div className="space-y-2">
              {" "}
              {sellingItems.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-white border rounded-md"
                  >
                    <div className="flex items-center gap-3">
                      <div>
                        <img
                          src={item.badge}
                          alt={item.item}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="italic">{item.item}</div>
                    </div>
                    <div>{item.count}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopMoments;
