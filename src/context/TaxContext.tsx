import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import CustomAlert from "../Components/utilis/CustomAlert";

// Define the context
const TaxContext = createContext<any>(null);

// API Endpoints
const BASE_URL = "http://testapisapins.ortezerp.in/Api/V1/TaxMaster";
const ENDPOINTS = {
  LIST: `${BASE_URL}/TaxMasterList`,
  SAVE: `${BASE_URL}/TaxMasterSave`,
  DELETE: `${BASE_URL}/TaxMasterDelete`,
};

// Provider Component
export const TaxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [taxData, setTaxData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch Tax Data
  const fetchTaxData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(ENDPOINTS.LIST, {
        cType: "SELECT ALL",
        nUserId: 0,
        nPrimaryKey: 0,
        cSchemaName: "AAAAAAAAAAAAAAAAAAAAALChCPr6MXRPPxFQSzz8cZU=",
        cDBName: "AAAAAAAAAAAAAAAAAAAAAKAXvQThYpK68tLWRy/lu/8=",
        nCompanyId: 1,
        nBranchId: 0,
        nOutletType: 0,
      });
      console.log(response.data)
      setTaxData(response.data.rslt || []);
    } catch (error) {
      console.error("Failed to fetch tax data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add Tax
  const addTax = async (newTax: any) => {
    try {
      const payload = {
        ...newTax,
        nTaxId: 0,
        bActive: newTax.bActive || false,
        nCompanyId: 1,
        nBranchId: 0,
        bCancelled: false,
        nCreatedBy: 0,
        dCreatedDate: new Date().toISOString(),
        cSchemaName: "AAAAAAAAAAAAAAAAAAAAALChCPr6MXRPPxFQSzz8cZU=",
        cDBName: "AAAAAAAAAAAAAAAAAAAAAKAXvQThYpK68tLWRy/lu/8=",
        bExempted: true,
      };
  
      const response = await axios.post(ENDPOINTS.SAVE, payload);
  
      console.log(response.data);
      if (response?.data?.bSuccess) {
        fetchTaxData();
        CustomAlert({ type: "success", message: "Tax added successfully." });
      } else {
        throw new Error(response?.data?.cMessage || "Unknown error occurred");
      }
    } catch (error: any) {
      console.error("Failed to add tax:", error);
      const errorMessage =
        error.response?.data?.cMessage || "Failed to add tax. Please try again.";
      CustomAlert({ type: "error", message: errorMessage });
    }
  };
  
  // Edit Tax
const editTax = async (updatedTax: any) => {
  try {
    const response = await axios.post(ENDPOINTS.SAVE, {
      ...updatedTax,
      nModifiedBy: 0,
      dModifiedDate: new Date().toISOString(),
      cSchemaName: "AAAAAAAAAAAAAAAAAAAAALChCPr6MXRPPxFQSzz8cZU=",
      cDBName: "AAAAAAAAAAAAAAAAAAAAAKAXvQThYpK68tLWRy/lu/8=",
      nCompanyId: 1,
      nBranchId: 0,
      bCancelled: false,
      nTaxType: 0,
    });
     console.log(response.data)
    if (response?.data?.bSuccess) {
      fetchTaxData();
      CustomAlert({ type: "success", message: "Tax updated successfully." });
    } else {
      throw new Error(response?.data?.cMessage || "Failed to update tax");
    }
  } catch (error) {
    console.error("Failed to edit tax:", error);
    CustomAlert({ type: "error", message: "Failed to update tax." });
  }
};

  
// Delete Tax 
const deleteTax = async (nTaxId: number) => {
  try {
    const response = await axios.post(ENDPOINTS.DELETE, {
      cType: "DELETE",
      nUserId: 0,
      nPrimaryKey: nTaxId,
      cSchemaName: "AAAAAAAAAAAAAAAAAAAAALChCPr6MXRPPxFQSzz8cZU=",
      cDBName: "AAAAAAAAAAAAAAAAAAAAAKAXvQThYpK68tLWRy/lu/8=",
      nCompanyId: 1,
      nBranchId: 0,
      nOutletType: 0,
    });
    console.log(response.data); 
    if (response?.data?.bSuccess) {
      fetchTaxData();
    } else {
      throw new Error(response?.data?.cMessage || "Failed to delete tax");
    }
  } catch (error) {
    console.error("Failed to delete tax:", error);
    CustomAlert({ type: "error", message: "Failed to delete tax. Please try again." });
  }
};


  useEffect(() => {
    fetchTaxData();
  }, []);

  return (
    <TaxContext.Provider value={{ taxData, addTax, editTax, deleteTax, loading }}>
      {children}
    </TaxContext.Provider>
  );
};

// Custom hook for accessing the context
export const useTax = () => useContext(TaxContext);
