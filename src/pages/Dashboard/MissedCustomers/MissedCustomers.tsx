import React from "react";
import MissedCustomerHeader from "../../../components/Dashboardcmp/MissedCustomers/MissedCustomerHeader";
import { MissedCustomerProvider } from "../../../context/MissedCustomersContext";
const MissedCustomers: React.FC = () => {
    return (
        <>
        <MissedCustomerProvider>
        <MissedCustomerHeader/>
        </MissedCustomerProvider>
        </>
    );
};      

export default MissedCustomers; 