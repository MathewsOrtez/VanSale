import React, { createContext, useContext, useEffect, useState } from "react";
import { apiRequest } from "../api/apiUtils";
import { API_DEFAULTS, ENDPOINTS } from "../api/apiConfig";
import CustomAlert from "../components/utilis/CustomAlert";

const ItemGroupContext = createContext<any>(null);

export const ItemGroupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [itemGroupData, setItemGroupData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchItemGroups = async () => {
    setLoading(true);
    try {
      const data = await apiRequest(ENDPOINTS.ITEM_GROUP.LIST, "POST", {
        cType: "SELECT ALL",
      });
      setItemGroupData(data?.rslt?.sort((a: any, b: any) => a.nItemGroupId - b.nItemGroupId) || []);
    } catch (error) {
      console.error("Failed to fetch item groups:", error);
    } finally {
      setLoading(false);
    }
  };

  const addItemGroup = async (newItemGroup: any) => {
    try {
      const response = await apiRequest(ENDPOINTS.ITEM_GROUP.SAVE, "POST", {
        ...newItemGroup,
        nItemGroupId: 0,
        dCreatedDate: new Date().toISOString(),
        dModifiedDate: new Date().toISOString(),
        nCreatedBy: 0,
        bActive: newItemGroup.bActive || false,
        bCancelled: false,
        bExempted: true,
        bDiscountApplicable: true,
        nTaxScheduleId :0,
        nModifiedBy: 0,
      });
      console.log(response);
      CustomAlert({ type: "success", message: response.cMessage });
      fetchItemGroups();
    } catch (error: any) {
      CustomAlert({ type: "error", message: error.message });
    }
  };

  const editItemGroup = async (updatedItemGroup: any) => {
    try {
      const response = await apiRequest(ENDPOINTS.ITEM_GROUP.SAVE, "POST", {
        ...updatedItemGroup,
        nItemGroupId: updatedItemGroup.nItemGroupId,
        bActive: updatedItemGroup.bActive || false,
        bCancelled: false,
        nCreatedBy: 0,
        dCreatedDate: new Date().toISOString(),
        bExempted: true,
        bDiscountApplicable: true,
        nTaxScheduleId :0,
        dModifiedDate: new Date().toISOString(),
        nModifiedBy: 0,
        ...API_DEFAULTS,
      });
      console.log(response);
      CustomAlert({ type: "success", message: response.cMessage });
      fetchItemGroups();
    } catch (error: any) {
      CustomAlert({ type: "error", message: error.message });
    }
  };

  const deleteItemGroup = async (nItemGroupId: number) => {
    try {
      const response = await apiRequest(ENDPOINTS.ITEM_GROUP.DELETE, "POST", {
        cType: "DELETE",
        nPrimaryKey: nItemGroupId,
      });
      // CustomAlert({ type: "success", message: response.cMessage });
      fetchItemGroups();
    } catch (error: any) {
      CustomAlert({ type: "error", message: error.message });
    }
  };

  useEffect(() => {
    fetchItemGroups();
  }, []);

  return (
    <ItemGroupContext.Provider value={{ itemGroupData, addItemGroup, editItemGroup, deleteItemGroup, loading }}>
      {children}
    </ItemGroupContext.Provider>
  );
};

export const useItemGroup = () => useContext(ItemGroupContext);
