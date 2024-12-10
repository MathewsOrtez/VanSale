import React from "react";
import CustomerCoveredVanHeader from "../../../components/Dashboardcmp/CustomerCovered/CustomerCoveredVanHeader";
import { CustomerCoveredProvider } from "../../../context/CustomerCoveredContext";

const CustomerCoveredVan:React.FC = () => {
    return (
        <>
        <CustomerCoveredProvider>
        <CustomerCoveredVanHeader/>
        </CustomerCoveredProvider>
        </>          
    );
}
export default CustomerCoveredVan;