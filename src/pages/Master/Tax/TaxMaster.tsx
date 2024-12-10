import React from "react";
import TaxTable from "../../../components/Tax/TaxTable";
import { TaxProvider } from "../../../context/TaxContext";
const TaxMaster : React.FC = ()=>{
    return(
        <>
        <TaxProvider>
        <TaxTable/>
        </TaxProvider>
        </>
    )
}
export default TaxMaster