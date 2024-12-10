import React, { createContext, useContext, useState } from "react";

// Define the context
const StateContext = createContext<any>(null);

// Provider Component
export const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stateData, setStateData] = useState([
    { srl: 1, name: "Kerala", shortname: "KL", active: true,statecode:"KL89551" },
    { srl: 2, name: "Tamil Nadu", shortname: "TN", active: false,statecode:"TN36596" },
    { srl: 3, name: "Karnataka", shortname: "KA", active: true,statecode:"KA78992" },
    { srl: 4, name: "Andhra Pradesh", shortname: "AP", active: false,statecode:"AP12345" },
    { srl: 5, name: "Maharashtra", shortname: "MH", active: true,statecode:"MH67890" },
    { srl: 6, name: "Gujarat", shortname: "GJ", active: true,statecode:"GJ54321" },
    { srl: 7, name: "Rajasthan", shortname: "RJ", active: true,statecode:"RJ98765" }
  ]);

  const addState = (newState: any) => { 
    setStateData((prev) => [...prev, { srl: prev.length + 1, ...newState }]);
  };

  const editState = (updatedData: any) => {
    setStateData((prev) =>
      prev.map((item) => (item.srl === updatedData.srl ? updatedData : item))
    );
  };

  const deleteState = (srl: number) => {
    // setStateData((prev) => prev.filter((item) => item.srl !== srl));
    
    // Reassign sequential `srl` values
    const filteredData = stateData.filter((item) => item.srl !== srl);
    setStateData(filteredData.map((item, index) => ({
      ...item,
      srl: index + 1, // Assign new serial numbers
    })));  
  };

  const deleteChecked = ( selectedRows: number[]) => {
    setStateData((prev) => {
      const filteredData = prev.filter((item) => !selectedRows.includes(item.srl));
      return filteredData.map((item, index) => ({
        ...item,
        srl: index + 1,
      }));
    });
  };
  

  return (
    <StateContext.Provider value={{
      stateData, addState, editState, deleteState, deleteChecked
     }}>
      {children}
    </StateContext.Provider>        
  );
};

// Custom hook for accessing the context
export const useStates = () => useContext(StateContext);
