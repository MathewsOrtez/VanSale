import React, { createContext, useContext, useState } from "react";

// Define the context
const UserVanLinkingContext = createContext<any>(null);

// Provider Component
export const UserVanLinkingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userVanLinkingData, setUsereVanLinkingData] = useState([
    { srl: 1, name: "Hari Haran",linkedvancount:5,  active: true ,vans:["Van 1","Van 2","Van 3","Van 4","Van 5"]},
    { srl: 2, name: "Vimal Kumar",linkedvancount:4, active: false,vans:["Van 1","Van 2","Van 3","Van 4"] },
    { srl: 3, name: "Gopan Krish",linkedvancount:3, active: true,vans:["Van 1","Van 2","Van 3"] },
    { srl: 4, name: "Dinesh Kumar",linkedvancount:2, active: false,vans:["Van 1","Van 2"] },
    { srl: 5, name: "Prakash Kumar",linkedvancount:1,  active: true,vans:["Van 1"] },
    { srl: 6, name: "Manesh Kumar",linkedvancount:0,  active: true,vans:[] }
  ]);

  const addUserVanLinking = (newVan: any) => { 
    setUsereVanLinkingData((prev) => [...prev, { srl: prev.length + 1, ...newVan }]);
  };

  const editUserVanLinking = (updatedData: any) => {
    setUsereVanLinkingData((prev) =>
      prev.map((item) => (item.srl === updatedData.srl ? updatedData : item))
    );
  };

  const deleteUserVanLinking = (srl: number) => {    
    // Reassign sequential `srl` values
    const filteredData = userVanLinkingData.filter((item) => item.srl !== srl);
    setUsereVanLinkingData(filteredData.map((item, index) => ({
      ...item,
      srl: index + 1, // Assign new serial numbers
    })));  
  };

  const deleteChecked = ( selectedRows: number[]) => {
    setUsereVanLinkingData((prev) => {
      const filteredData = prev.filter((item) => !selectedRows.includes(item.srl));
      return filteredData.map((item, index) => ({
        ...item,
        srl: index + 1,
      }));
    });
  };
  

  return (
    <UserVanLinkingContext.Provider value={{
      userVanLinkingData, addUserVanLinking, editUserVanLinking, deleteUserVanLinking, deleteChecked
     }}>
      {children}
    </UserVanLinkingContext.Provider>        
  );
};

// Custom hook for accessing the context
export const useUserVanLinking = () => useContext(UserVanLinkingContext);
