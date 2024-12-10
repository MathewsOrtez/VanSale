import React from "react";
import CustomerCoveredOutletHeader from "../../../components/Dashboardcmp/CustomerCovered/CustomerCoveredOutletHeader";
import { CustomerCoveredProvider } from "../../../context/CustomerCoveredContext";

const CustomerCoveredOutlet:React.FC = () => {
    return (
        <>
        <CustomerCoveredProvider>
        <CustomerCoveredOutletHeader/> 
        </CustomerCoveredProvider>
        </>
    )   
}

export default CustomerCoveredOutlet