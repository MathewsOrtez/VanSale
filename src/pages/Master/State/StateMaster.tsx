import React from "react";
import StateMasterTable from "../../../components/State/StateMasterTable";
import { StateProvider } from "../../../context/StateContext";
const StateMaster:React.FC = () => {
    return (
        <>
        <StateProvider>
        <StateMasterTable />
        </StateProvider>    
        </>
    );
};

export default StateMaster;