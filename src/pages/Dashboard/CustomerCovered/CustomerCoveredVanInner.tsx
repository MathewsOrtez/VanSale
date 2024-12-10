import React from "react";
import CustomerCoveredVanInnerHeader from "../../../components/Dashboardcmp/CustomerCovered/CustomerCoveredVanInnerHeader";
import { CustomerCoveredProvider } from "../../../context/CustomerCoveredContext";
const CustomerCoveredVanInner:React.FC = () => {
    return (
        <>
        <CustomerCoveredProvider>
        <CustomerCoveredVanInnerHeader/>
        </CustomerCoveredProvider>
        </>
    );
};  

export default CustomerCoveredVanInner