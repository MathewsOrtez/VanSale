import React from "react";
import MissedCustomerVanInnerHeader from "../../../components/Dashboardcmp/MissedCustomers/MissedCustomerVanInnerHeader";
import { MissedCustomerProvider } from "../../../context/MissedCustomersContext";
const MissedCustomerVanInner:React.FC = () => {
    return (
        <>
        <MissedCustomerProvider>
        <MissedCustomerVanInnerHeader/>
        </MissedCustomerProvider>
        </>
    );
};      

export default MissedCustomerVanInner