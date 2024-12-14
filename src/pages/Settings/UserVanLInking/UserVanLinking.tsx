import React from "react";
import UserVanLinkingTable from "../../../components/Settings/UserVanLinking/UserVanLinkingTable";
import { UserVanLinkingProvider } from "../../../context/UserVanLinkingContext";
const UserVanLinking: React.FC = () => {
    return (
        <>
        <UserVanLinkingProvider>
        <UserVanLinkingTable/>
        </UserVanLinkingProvider>
        </>
    );
};      

export default UserVanLinking;