import React from "react";
import ItemGroupTable from "../../../components/Itemgroup/ItemGroupTable";
import { ItemGroupProvider } from "../../../context/ItemGroupContext";

const ItemGroupMaster:React.FC = () => {
    return (
        <div>
            <ItemGroupProvider>
            <ItemGroupTable/>
            </ItemGroupProvider>
        </div>
    );
};  

export default ItemGroupMaster;