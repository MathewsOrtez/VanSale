import React, { createContext, useContext, useState } from "react";

// Define the context
const ItemGroupContext = createContext<any>(null);

// Provider Component
export const ItemGroupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [itemGroupData, setItemGroupData] = useState([
    { srl: 1, name: "Powder", shortname: "Pdr", active: true },
    { srl: 2, name: "Pickle", shortname: "Pkle", active: false },
    { srl: 3, name: "Rice", shortname: "Rc", active: false }, 
    { srl: 4, name: "Bruch", shortname: "Bsh", active: true }, 
    { srl: 5, name: "Paste", shortname: "Pste", active: false }, 
    { srl: 6, name: "Sauce", shortname: "Sc", active: true },
    { srl: 7, name: "Ketchup", shortname: "Ktp", active: true },
    { srl: 8, name: "Chutney", shortname: "Ctny", active: true },
    { srl: 9, name: "Chilli", shortname: "Cl", active: true },
    { srl: 10, name: "Chilli Paste", shortname: "Cp", active: true },
    { srl: 11, name: "Chilli Powder", shortname: "Cpw", active: true },
    { srl: 12, name: "Chilli Gold", shortname: "Cpg", active: true },  
  ]);

  const addItemGroup = (newItemGroup: any) => {
    setItemGroupData((prev) => [...prev, { srl: prev.length + 1, ...newItemGroup }]);
  };

  const editItemGroup = (updatedData: any) => {
    setItemGroupData((prev) =>
      prev.map((item) => (item.srl === updatedData.srl ? updatedData : item))
    );
  };

  const deleteItemGroup = (srl: number) => {
    // setItemGroupData((prev) => prev.filter((item) => item.srl !== srl));
    // Reassign sequential `srl` values
    const filteredData = itemGroupData.filter((item) => item.srl !== srl);
    setItemGroupData(filteredData.map((item, index) => ({
      ...item,
      srl: index + 1, // Assign new serial numbers
    })));  
  };

  const deleteChecked = ( selectedRows: number[]) => {
    setItemGroupData((prev) => {
      const filteredData = prev.filter((item) => !selectedRows.includes(item.srl));
      return filteredData.map((item, index) => ({
        ...item,
        srl: index + 1,
      }));
    });
  };
  

  return (
    <ItemGroupContext.Provider value={{ itemGroupData, addItemGroup ,editItemGroup,deleteItemGroup,deleteChecked
     }}>
      {children}
    </ItemGroupContext.Provider>
  );
};

// Custom hook for accessing the context
export const useItemGroup = () => useContext(ItemGroupContext);
