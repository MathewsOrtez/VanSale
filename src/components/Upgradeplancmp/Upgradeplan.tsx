import React from "react";
import { TiTick } from "react-icons/ti";

// Define types for planItems to avoid using 'any'
type PlanItem = {
  label: string;
  offer1: string;
  offer2: string;
  offer3: string;
  offer4: string;
  offer5: string;
  tickion: React.ReactNode;
  buttonvalue: string;
  monthprice?: string;
  yearprice?: string;
  offersave?: string;
};

const Upgradeplan: React.FC = () => {
  const planItems: PlanItem[] = [
    {
      label: "Free",
      offer1: "Simple and flexible per-user pricing",
      offer2: "Simple and flexible",
      offer3: "flexible per-user pricing",
      offer4: "per-user pricing",
      offer5: "Simple and flexible",
      tickion: <TiTick className="text-green-700" />,
      buttonvalue: "Get Started",
    },
    {
      label: "Standard",
      offer1: "Simple and flexible per-user pricing",
      offer2: "Simple and flexible",
      offer3: "flexible per-user pricing",
      offer4: "per-user pricing",
      offer5: "Simple and flexible",
      tickion: <TiTick className="text-green-700" />,
      buttonvalue: "Get Started",
      monthprice: "₹2500.00 /Month",
      yearprice: "Charging ₹52000.00/year",
      offersave: "Save ₹1000",
    },
    {
      label: "Pro",
      offer1: "Simple and flexible per-user pricing",
      offer2: "Simple and flexible",
      offer3: "flexible per-user pricing",
      offer4: "per-user pricing",
      offer5: "Simple and flexible",
      tickion: <TiTick className="text-green-700" />,
      buttonvalue: "Get Started",
      monthprice: "₹5500.00 /Month",
      yearprice: "Charging ₹52000.00/year",
      offersave: "Save ₹1000",
    },
    {
      label: "Customize Plan",
      offer1: "Simple and flexible per-user pricing",
      offer2: "Simple and flexible",
      offer3: "flexible per-user pricing",
      offer4: "per-user pricing",
      offer5: "Simple and flexible",
      tickion: <TiTick className="text-green-700" />,
      buttonvalue: "Customize",
    },
  ];

  // Helper component to render offers with tick icons
  const OfferItem = ({ offer }: { offer: string }) => (
    <div className="flex text-xs justify-center items-center gap-2">
      <div>{<TiTick className="text-green-700" />}</div>
      <div>{offer}</div>
    </div>
  );

  return (
    <>
      <div className="flex-col justify-center items-center text-center py-12">
        <p className="text-4xl font-bold mb-6">
          Upgrade your plan for more features
        </p>
        <p className="text-gray-600">
          "You're currently using the free plan. Your plan will expire in 10
          days."
        </p>
      </div>

      <div className="flex gap-4 mx-4">
        {planItems.map((item, index) => (
          <div key={index} className=" p-4 shadow-xl border rounded-2xl w-full flex flex-col justify-between">
            <div>
              <div className="font-bold text-4xl my-4">{item.label}</div>
              {item.monthprice && (
                <div className="mt-2 text-xl text-gray-600 font-semibold">{item.monthprice}</div>
              )}
              {item.yearprice && (
                <div className="text-sm text-gray-600 font-semibold">{item.yearprice} </div>
              )}
              {item.offersave && (
                <div className="text-sm text-green-600 font-semibold">{item.offersave}</div>
              )}
            </div>

            {/* Offer items list */}
            <div className="flex flex-col justify-start items-start gap-4 text-gray-600 text-sm h-[10rem] my-4">
              <OfferItem offer={item.offer1} />
              <OfferItem offer={item.offer2} />
              <OfferItem offer={item.offer3} />
              <OfferItem offer={item.offer4} />
              <OfferItem offer={item.offer5} />
            </div>

            {/* Button aligned to the bottom */}
            <div className="mt-auto">
              <button className="bg-black text-white px-6 py-2 rounded-md hover:shadow-2xl w-full ">
                {item.buttonvalue}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Upgradeplan;
