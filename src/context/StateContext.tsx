import React, { createContext, useContext, useEffect, useState } from "react";
import { apiRequest } from "../api/apiUtils";
import { ENDPOINTS } from "../api/apiConfig";
import CustomAlert from "../components/utilis/CustomAlert";
import { API_DEFAULTS } from "../api/apiConfig";
const StateContext = createContext<any>(null);

export const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stateData, setStateData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchStates = async () => {
    setLoading(true);
    try {
      const data = await apiRequest(ENDPOINTS.STATE.LIST, "POST", {
        cType: "SELECT ALL"
      });
      setStateData(data?.rslt?.sort((a: any, b: any) => a.nStateId - b.nStateId) || []);
    } catch (error) {
      console.error("Failed to fetch states:", error);
    } finally {
      setLoading(false);
    }
  };

  const addState = async (newState: any) => {
    try {
      const response = await apiRequest(ENDPOINTS.STATE.SAVE, "POST", {
        ...newState,
        nStateId: 0,
        bActive: newState.bActive || false,
        dCreatedDate: new Date().toISOString(),
        dModifiedDate: new Date().toISOString(),
        nModifiedBy: 0,
        nTaxType: 0,
        bCancelled: false,
        nCreatedBy: 0,
        bExempted: true,
        cStateSymbol: "t",
      });
      CustomAlert({ type: "success", message: response.cMessage });
      fetchStates();
    } catch (error: any) {
      CustomAlert({ type: "error", message: error.message });
    }
  };

  const editState = async (updatedState: any) => {
    try {
      const response = await apiRequest(ENDPOINTS.STATE.SAVE, "POST", {
        ...updatedState,
        nStateId: updatedState.nStateId,
        bActive: updatedState.bActive || false,
        dCreatedDate: updatedState.dCreatedDate,
        dModifiedDate: new Date().toISOString(),
        nModifiedBy: 0,
        nTaxType: updatedState.nTaxType,
        bCancelled: false,
        nCreatedBy: 0,
        bExempted: true,
        cStateSymbol: "t",
        // ...API_DEFAULTS
      });
      CustomAlert({ type: "success", message: response.cMessage });
      fetchStates();
    } catch (error: any) {
      CustomAlert({ type: "error", message: error.message });
    }
  };

  const deleteState = async (nStateId: number) => {
    try {
      const response = await apiRequest(ENDPOINTS.STATE.DELETE, "POST", {
        cType: "DELETE",
        nId: nStateId
      });
      // CustomAlert({ type: "success", message: response.cMessage });
      fetchStates();
    } catch (error: any) {
      CustomAlert({ type: "error", message: error.message });
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  return (
    <StateContext.Provider value={{ stateData, addState, editState, deleteState, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateData = () => useContext(StateContext);
