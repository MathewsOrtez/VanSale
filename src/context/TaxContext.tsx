import React, { createContext, useContext, useEffect, useState } from "react";
import { apiRequest } from "../api/apiUtils";
import { ENDPOINTS } from "../api/apiConfig";
import CustomAlert from "../components/utilis/CustomAlert";

const TaxContext = createContext<any>(null);

export const TaxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [taxData, setTaxData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchTaxes = async () => {
    setLoading(true);
    try {
      const data = await apiRequest(ENDPOINTS.TAX.LIST, "POST", {
        cType: "SELECT ALL",
        nPrimaryKey: 0,
      });
      setTaxData(data?.rslt?.sort((a: any, b: any) => a.nTaxId - b.nTaxId) || []);
    } catch (error) {
      console.error("Failed to fetch taxes:", error);
    } finally {
      setLoading(false);
    }
  };

  const addTax = async (newTax: any) => {
    try {
      const response = await apiRequest(ENDPOINTS.TAX.SAVE, "POST", {
        ...newTax,
        nTaxId: 0,
        dCreatedDate: new Date().toISOString(),
        dModifiedDate: new Date().toISOString(),
      });
      CustomAlert({ type: "success", message: response.cMessage });
      fetchTaxes();
    } catch (error: any) {
      CustomAlert({ type: "error", message: error.message });
    }
  };

  const editTax = async (updatedTax: any) => {
    try {
      const response = await apiRequest(ENDPOINTS.TAX.SAVE, "POST", {
        ...updatedTax,
        dModifiedDate: new Date().toISOString(),
      });
      CustomAlert({ type: "success", message: response.cMessage });
      fetchTaxes();
    } catch (error: any) {
      CustomAlert({ type: "error", message: error.message });
    }
  };

  const deleteTax = async (nTaxId: number) => {
    try {
      const response = await apiRequest(ENDPOINTS.TAX.DELETE, "POST", {
        cType: "DELETE",
        nPrimaryKey: nTaxId,
      });
      CustomAlert({ type: "success", message: response.cMessage });
      fetchTaxes();
    } catch (error: any) {
      CustomAlert({ type: "error", message: error.message });
    }
  };

  useEffect(() => {
    fetchTaxes();
  }, []);

  return (
    <TaxContext.Provider value={{ taxData, addTax, editTax, deleteTax, loading }}>
      {children}
    </TaxContext.Provider>
  );
};

export const useTax = () => useContext(TaxContext);
