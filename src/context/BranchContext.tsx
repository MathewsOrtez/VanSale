import React, { createContext, useContext, useState } from "react";

// Define the context
const BranchContext = createContext<any>(null);

// Provider Component
export const BranchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [branchData, setBranchData] = useState([
    { srl: 1, name: "Shopix", shortname: "Spx", active: true,email:"shopix@example.com",phone:"9965878854",state:"Kerala",shopadress:"KochI, Kerala, India" ,gstnumber :"1234567890" },
    { srl: 2, name: "Remo", shortname: "Rm", active: false,email:"remo@example.com",phone:"9965878854",state:"Tamil Nadu",shopadress:"Chennai, Tamil Nadu, India",gstnumber :"1234567891" },
    { srl: 3, name: "Kiran Shop", shortname: "Ks", active: true,email:"shopix@example.com",phone:"9965878854",state:"Karnataka",shopadress:"Bangalore, Karnataka, India",gstnumber :"1234567892" },
    { srl: 4, name: "Samson", shortname: "Ss", active: false,email:"samson@example.com",phone:"9965878854",state:"Andhra Pradesh",shopadress:"Hyderabad, Andhra Pradesh, India",gstnumber :"1234567893" },
    { srl: 5, name: "Zizo", shortname: "Zz", active: true,email:"zizo@example.com",phone:"9965878854",state:"Maharashtra",shopadress:"Mumbai, Maharashtra, India",gstnumber :"1234567894" },
    { srl: 6, name: "Vishal", shortname: "Vs", active: false,email:"vishal@example.com",phone:"9965878854",state:"Uttar Pradesh",shopadress:"Lucknow, Uttar Pradesh, India",gstnumber :"1234567895" },
    { srl: 7, name: "Rahul", shortname: "Rl", active: true,email:"rahul@example.com",phone:"9965878854",state:"West Bengal",shopadress:"Kolkata, West Bengal, India",gstnumber :"1234567896" },
    { srl: 8, name: "Ravi", shortname: "Rv", active: false,email:"ravi@example.com",phone:"9965878854",state:"Rajasthan",shopadress:"Jaipur, Rajasthan, India",gstnumber :"1234567897" },
    { srl: 9, name: "Raj", shortname: "Rj", active: true,email:"raj@example.com",phone:"9965878854",state:"Punjab",shopadress:"Chandigarh, Punjab, India",gstnumber :"1234567898" },
    { srl: 10, name: "Rajat", shortname: "Rt", active: false,email:"rajat@example.com",phone:"9965878854",state:"Haryana",shopadress:"Chandigarh, Haryana, India",gstnumber :"1234567899" },
    { srl: 11, name: "Ramesh", shortname: "Rm", active: true,email:"ramesh@example.com",phone:"9965878854",state:"Tamil Nadu",shopadress:"Chennai, Tamil Nadu, India",gstnumber :"1234567900" },
    { srl: 12, name: "Rohit", shortname: "Rt", active: false,email:"rohit@example.com",phone:"9965878854",state:"Karnataka",shopadress:"Bangalore, Karnataka, India",gstnumber :"1234567901" },
    { srl: 13, name: "Ravi", shortname: "Rv", active: true,email:"ravi@example.com",phone:"9965878854",state:"Uttar Pradesh",shopadress:"Lucknow, Uttar Pradesh, India",gstnumber :"1234567895" },
    { srl: 14, name: "Raj", shortname: "Rj", active: false,email:"raj@example.com",phone:"9965878854",state:"West Bengal",shopadress:"Kolkata, West Bengal, India",gstnumber :"1234567896" },
    { srl: 15, name: "Rajat", shortname: "Rt", active: true,email:"rajat@example.com",phone:"9965878854",state:"Rajasthan",shopadress:"Jaipur, Rajasthan, India",gstnumber :"1234567897" },
  ]);

  const[stateOptionsData,setStateOptionsData]=useState([
    {value:"Select State",label:"Select State"},
    { value: "Andhra Pradesh", label: "Andhra Pradesh" },
    { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
    { value: "Assam", label: "Assam" },
    { value: "Bihar", label: "Bihar" },
    {value :"Kerala",label:"Kerala"},
    {value :"Karnataka",label:"Karnataka"},
    {value :"Tamil Nadu",label:"Tamil Nadu"},
    {value :"Maharashtra",label:"Maharashtra"},
    {value :"Uttar Pradesh",label:"Uttar Pradesh"},
    {value :"Uttaranchal Pradesh",label:"Uttaranchal Pradesh"},
    {value :"West Bengal",label:"West Bengal"},
    {value :"Rajasthan",label:"Rajasthan"},
    {value :"Punjab",label:"Punjab"},
    {value :"Jammu and Kashmir",label:"Jammu and Kashmir"},
    {value :"Chandigarh",label:"Chandigarh"},
    {value :"Haryana",label:"Haryana"},
    {value :"Himachal Pradesh",label:"Himachal Pradesh"},
    {value :"Goa",label:"Goa"},
    {value :"Gujarat",label:"Gujarat"},
    {value :"Delhi",label:"Delhi"},
    {value :"Dadra and Nagar Haveli",label:"Dadra and Nagar Haveli"},
    {value :"Daman and Diu",label:"Daman and Diu"},
    {value :"Chhattisgarh",label:"Chhattisgarh"},
    {value :"Jharkhand",label:"Jharkhand"},
    {value :"Odisha",label:"Odisha"},
    {value :"Telangana",label:"Telangana"},
    {value :"Mizoram",label:"Mizoram"},
    {value :"Manipur",label:"Manipur"},
    {value :"Meghalaya",label:"Meghalaya"},
    {value :"Nagaland",label:"Nagaland"},
    {value :"Sikkim",label:"Sikkim"},
    {value :"Tripura",label:"Tripura"}
  ])

  const addBranch = (newBranch: any) => { 
    setBranchData((prev) => [...prev, { srl: prev.length + 1, ...newBranch }]);
  };

  const editBranch = (updatedData: any) => {
    setBranchData((prev) =>
      prev.map((item) => (item.srl === updatedData.srl ? updatedData : item))
    );
    
  };

  const deleteBranch = (srl: number) => {
    // setBranchData((prev) => prev.filter((item) => item.srl !== srl));
    // Reassign sequential `srl` values
    const filteredData = branchData.filter((item) => item.srl !== srl);
    setBranchData(filteredData.map((item, index) => ({
      ...item,
      srl: index + 1, // Assign new serial numbers
    })));  
  };

  const deleteChecked = ( selectedRows: number[]) => {
    setBranchData((prev) => {
      const filteredData = prev.filter((item) => !selectedRows.includes(item.srl));
      return filteredData.map((item, index) => ({
        ...item,
        srl: index + 1,
      }));
    });
  };
  

  return (
    <BranchContext.Provider value={{
      branchData, addBranch, editBranch, deleteBranch ,deleteChecked ,stateOptionsData
     }}>
      {children}
    </BranchContext.Provider>        
  );
};

// Custom hook for accessing the context
export const useBranch = () => useContext(BranchContext);
