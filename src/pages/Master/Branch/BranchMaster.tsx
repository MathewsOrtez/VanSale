import React from "react";
import { BranchProvider } from "../../../context/BranchContext";
import BranchMasterTable from "../../../components/Branch/BranchMasterTable";
const BranchMaster: React.FC = () => {
    return (
        <>
       <BranchProvider> 
       <BranchMasterTable/>
        </BranchProvider>   
        </>
    );
};  

export default BranchMaster;