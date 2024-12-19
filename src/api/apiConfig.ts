export const BASE_URL = "http://testapisapins.ortezerp.in/Api/V1";

export const ENDPOINTS = {
  ITEM_GROUP: {
    LIST: `${BASE_URL}/ItemGroup/ItemGroupList`,
    SAVE: `${BASE_URL}/ItemGroup/ItemGroupSave`,
    DELETE: `${BASE_URL}/ItemGroup/ItemGroupDelete`,
  },
  TAX: {
    LIST: `${BASE_URL}/TaxMaster/TaxMasterList`,
    SAVE: `${BASE_URL}/TaxMaster/TaxMasterSave`,
    DELETE: `${BASE_URL}/TaxMaster/TaxMasterDelete`,
  },
  STATE :{
    LIST: `${BASE_URL}/State/StateList`,
    SAVE: `${BASE_URL}/State/StateSave`,
    DELETE: `${BASE_URL}/State/StateDelete`,
  }
};

export const API_DEFAULTS = {
  cType: "SELECT ALL",
  nUserId: 0,
  nPrimaryKey: 0,
  cSchemaName: "AAAAAAAAAAAAAAAAAAAAALChCPr6MXRPPxFQSzz8cZU=",
  cDBName: "AAAAAAAAAAAAAAAAAAAAAKAXvQThYpK68tLWRy/lu/8=",
  nCompanyId: 1,
  nBranchId: 0,
  nOutletType: 0,
};
