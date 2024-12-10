import React, { createContext, useContext, useState } from "react";

interface CustomerData {
  srl: number;
  name: string;
  type: string;
  customercount: number;
  customers: { srl: number; customername?: string; route?: string; starttime?: string; endtime?: string; customercount ?: number; routecustomer?: Array<{ srl: number; customername: string }>  }[];
}

interface CustomerContextType {
  customerCoveredData: CustomerData[];
  setCustomerCoveredData: React.Dispatch<React.SetStateAction<CustomerData[]>>;
}

const CustomerCoveredContext = createContext<CustomerContextType | undefined>(undefined);

export const useCustomerCoveredContext = () => {
  const context = useContext(CustomerCoveredContext);
  if (!context) {
    throw new Error("useCustomerCoveredContext must be used within a CustomerCoveredProvider");
  }
  return context;
};

export const CustomerCoveredProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [customerCoveredData, setCustomerCoveredData] = useState<CustomerData[]>([
    {
        srl: 1,
        name: "Outlet 1",
        type: "outlet",
        customercount: 16,
        customers: [
          { 
            srl: 1,
            customername: "K&K Company",
          },
          {
            srl: 2,
            customername: "C Shop",
          },
          {
            srl: 3,
            customername: "R Shop",
          },
          {
            srl: 4,
            customername: "M Shop",
          },
          {
            srl: 5,
            customername: "T Shop",
          },
          {
            srl: 6,
            customername: "Marayoor Groups & Limits",
          },
          {
            srl: 7,
            customername: "Vivek Shop",
          },
        ],
      },
      {
        srl: 2,
        name: "Outlet 2",
        type: "outlet",
        customercount: 16,
        customers: [
          {
            srl: 1,
            customername: "Visigrow Company",
          },
          {
            srl: 2,
            customername: "Ant Shop",
          },
          {
            srl: 3,
            customername: "Uasrt Shop",
          },
          {
            srl: 4,
            customername: "Bar Shop",
          },
          {
            srl: 5,
            customername: "Tony&Guy Shop",
          },
          {
            srl: 6,
            customername: "Sanu Textiles",
          },
          {
            srl: 7,
            customername: "Nayanshop",
          },
        ],
      },
      { srl: 3, name: "Van 1", type: "van", customercount: 28, customers: [
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
      { srl: 4, name: "Van 2", type: "van", customercount: 16, customers: [
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
      { srl: 5, name: "Van 3", type: "van", customercount: 30, customers: [
          {
            srl: 1,
            route:"Edappally",
            starttime: "10:10am",
            endtime: "11:10am",
            customercount : 4,
            routecustomer: [{srl: 1, customername: "Puttu&Kadala Company"}]
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
    <CustomerCoveredContext.Provider value={{ customerCoveredData, setCustomerCoveredData }}>
      {children}
    </CustomerCoveredContext.Provider>
  );
};
