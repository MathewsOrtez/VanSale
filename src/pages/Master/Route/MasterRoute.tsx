import React from "react";
import RouteMaster from "../../../components/Route/RouteMasterTable";
import { RouteProvider } from "../../../context/RouteContext";
const MasterRoute : React.FC = () => {
    return (
        <>
        <RouteProvider>
        <RouteMaster/>
        </RouteProvider>
        </>
    );
};

export default MasterRoute;