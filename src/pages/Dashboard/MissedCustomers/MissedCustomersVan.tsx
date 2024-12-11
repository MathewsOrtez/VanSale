import React from "react";
import MissedCustomerVanHeader from "../../../components/Dashboardcmp/MissedCustomers/MissedCustomerVanHeader";
import { MissedCustomerProvider } from "../../../context/MissedCustomersContext";
const MissedCustomersVan:React.FC = () => {
    return (
        <>
        <MissedCustomerProvider>
        <MissedCustomerVanHeader/>
        </MissedCustomerProvider>
        </>
    );
};  

export default MissedCustomersVan;