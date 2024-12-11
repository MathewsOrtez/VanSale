import React, { createContext, useContext, useState } from "react";

interface CustomerData {
  srl: number;
  name: string;
  type: string;
  customercount: number;
  customers: { srl: number; customername?: string; route?: string; starttime?: string; endtime?: string; customercount ?: number; routecustomer?: Array<{ srl: number; customername: string }>  }[];
}

interface MissedCustomerContextType {
  missedCustomerData: CustomerData[];
  setMissedCustomerData: React.Dispatch<React.SetStateAction<CustomerData[]>>;
}

const MissedCustomerContext = createContext<MissedCustomerContextType | undefined>(undefined);

export const useMissedCustomerContext = () => {
  const context = useContext(MissedCustomerContext);
  if (!context) {
    throw new Error("useMissedCustomerContext must be used within a MissedCustomerProvider");
  }
  return context;
};

export const MissedCustomerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [missedCustomerData, setMissedCustomerData] = useState<CustomerData[]>([
      { srl: 1, name: "Van 1", type: "van", customercount: 28, customers: [
          {
            srl: 1,
            route:"Kakkand",
            starttime: "10:10am",
            endtime: "11:10am",
            routecustomer: [
              {
                srl: 1,
                customername: "K&K Company",
              },
              {
                srl: 2,
                customername: "Tree Company",
              },
            ],
            customercount : 4,
            
          },
          {
            srl: 2,
            route:"Pipeline",
            starttime: "12:10am",
            endtime: "1:10pm",
            customercount : 28,
            routecustomer: [
              {
                srl: 1,
                customername: "K Company",
              },
              {
                srl: 2,
                customername: "Rat Company",
              },
            ]
          },
          {
            srl: 3,
            route:"Kaloor",
            starttime: "10:10am",
            endtime: "1:10pm",
            customercount : 16,
            routecustomer: [
              {
                srl: 1,
                customername: "K Company",
              },
              {
                srl: 2,
                customername: "Kit Company",
              },
            ]
          },
          {
            srl: 4,
            route:"Edapalayam",
            starttime: "12:10am",
            endtime: "1:10pm",
            customercount : 30,
            routecustomer: [
              {
                srl: 1,
                customername: "Kitkat Company",
              },
              {
                srl: 2,
                customername: "Pepsi Company",
              },
            ]
          }
        ] },
      { srl: 2, name: "Van 2", type: "van", customercount: 16, customers: [
          {
            srl: 1,
            route:"Kochi",
            starttime: "10:10am",
            endtime: "11:10am",
            customercount : 4,
            routecustomer: [
              {
                srl: 1,
                customername: "Pattykutty Company",
              },
              {
                srl: 2,
                customername: "GunTod Company",
              }
            ]
          },
          {
            srl: 2,
            route:"Jetty",
            starttime: "12:10am",
            endtime: "1:10pm",
            customercount : 28,
          },
          {
            srl: 3,
            route:"Marine Drive",
            starttime: "10:10am",
            endtime: "1:10pm",
            customercount : 16,
          },
          {
            srl: 4,
            route:"FortKochi",
            starttime: "12:10am",
            endtime: "1:10pm",
            customercount : 30,
          }
        ] },
      { srl: 3, name: "Van 3", type: "van", customercount: 30, customers: [
          {
            srl: 1,
            route:"Edappally",
            starttime: "10:10am",
            endtime: "11:10am",
            customercount : 4,
            routecustomer: [{srl: 1, customername: "Puttu & Kadala Company"}]
          },
          {
            srl: 2,
            route:"Vytilla",
            starttime: "12:10am",
            endtime: "1:10pm",
            customercount : 28,
          },
          {
            srl: 3,
            route:"Thykodam",
            starttime: "10:10am",
            endtime: "1:10pm",
            customercount : 16,
          },
          {
            srl: 4,
            route:"Thopparapally",
            starttime: "12:10am",
            endtime: "1:10pm",
            customercount : 30,
          }
        ]  },
  ]);

  return (      
    <MissedCustomerContext.Provider value={{ missedCustomerData, setMissedCustomerData }}>
      {children}
    </MissedCustomerContext.Provider>
  );
};
