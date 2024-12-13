import React from "react";
import OutletImage from "../../../assets/Outlet.png";
import VanImage from "../../../assets/Van.png"
interface CustomerCoveredTableProps {
  data: Array<{ srl: number; name: string; type: string; customercount: number}>;
  onRowClick: (type: string, name: number) => void;
}

const MissedCustomerTable: React.FC<CustomerCoveredTableProps> = ({data, onRowClick}) => {
    return (
        <>
        <div className="px-4">
        <table className={` w-full border-collapse rounded-md text-sm`}>
        <thead className="border border-gray-200 bg-white text-[#929292]">
          <tr >
          <th className="p-3  font-medium text-start" >Srl</th>
          <th className="p-3  font-medium text-start" >Route</th>
          <th className="p-3  font-medium text-start" >Customer Count</th>
          </tr>
        </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan={3} className="p-3 text-center text-gray-500 border">
                    No data available
                  </td>
                </tr>
              ) : data.map((row) => (
            <tr
              key={row.srl}
              className="text-gray-800 bg-white border-b hover:bg-gray-50 hover:border-gray-200 border-gray-100 text-start cursor-pointer"
              onClick={() => onRowClick(row.type, row.srl )}
            >
              <td className="p-3 ">{row.srl}</td>
              <td className="p-3 flex items-center  justify-start gap-4"><img src={row.type === "outlet" ? OutletImage : VanImage} alt="" />{row.name}</td>
              <td className="p-3 ">{row.customercount}</td>
            </tr>
          ))}
        </tbody>
      </table>

        </div>
        </>
    );
};

export default MissedCustomerTable;