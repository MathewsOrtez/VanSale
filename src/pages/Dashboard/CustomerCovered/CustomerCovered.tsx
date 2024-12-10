import React from "react";
import CustomerCoveredHeader from "../../../components/Dashboardcmp/CustomerCovered/CustomerCoveredHeader";
import { CustomerCoveredProvider } from "../../../context/CustomerCoveredContext";
const CustomerCovered:React.FC = () => {
    return (
        <>
        <CustomerCoveredProvider>
        <CustomerCoveredHeader/>
        </CustomerCoveredProvider>
        </>
    );  
}

export default CustomerCovered;