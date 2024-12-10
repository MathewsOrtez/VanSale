import React, { createContext, useContext, useState } from "react";

// Define the context
const TaxContext = createContext<any>(null);

// Provider Component
export const TaxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [taxData, setTaxData] = useState([
    { srl: 1, name: "GST", shortname: "GST", active: true },
    { srl: 2, name: "VAT", shortname: "VAT", active: false },
    { srl: 3, name: "IGST", shortname: "IGST", active: true },
    { srl: 4, name: "CGST", shortname: "CGST", active: false },
    { srl: 5, name: "SGST", shortname: "SGST", active: true },
    { srl: 6, name: "UTGST", shortname: "UTGST", active: true },
    { srl: 7, name: "CESS", shortname: "CESS", active: true },
  ]);

  const addTax = (newTax: any) => {
    setTaxData((prev) => [...prev, { srl: prev.length + 1, ...newTax }]);
  };

  const editTax = (updatedData: any) => {
    setTaxData((prev) =>
      prev.map((item) => (item.srl === updatedData.srl ? updatedData : item))
    );
  };

  const deleteTax = (srl: number) => {
    // setTaxData((prev) => prev.filter((item) => item.srl !== srl));
    setTaxData((prev) => {
      const filteredData = prev.filter((item) => item.srl !== srl);
      return filteredData.map((item, index) => ({
        ...item,
        srl: index + 1,
      })); 
    });
  };

  const deleteChecked = ( selectedRows: number[]) => {
    setTaxData((prev) => {
      const filteredData = prev.filter((item) => !selectedRows.includes(item.srl));
      return filteredData.map((item, index) => ({
        ...item,
        srl: index + 1,
      }));
    });
  };
  

  return (
    <TaxContext.Provider value={{ taxData, addTax ,editTax,deleteTax ,deleteChecked
     }}>
      {children}
    </TaxContext.Provider>
  );
};

// Custom hook for accessing the context
export const useTax = () => useContext(TaxContext);
