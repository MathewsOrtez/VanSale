import React from "react";
// import OutletImage from "../../assets/Outlet.png";
// import VanImage from "../../assets/Van.png"

interface OutletTableProps {
  data: Array<{ srl: number; name: string; type: string; starttime: string; endtime: string; sales: number; return: number; replace: number; order: number; receipt: number }>;
  onRowClick: (type: string, name: string) => void;
}

const VanTable: React.FC<OutletTableProps> = ({data, onRowClick}) => {
    return (
        <>
        <div className="px-4">
        <table className={`w-full border-collapse rounded-md `}>
        <thead className="border bg-white text-[#a2a2a2]">
          <tr >
          <th className="p-2  font-medium text-start" >Srl</th>
          <th className="p-2  font-medium text-start" >Routes</th>
          <th className="p-2  font-medium text-start" >Start Time</th>
          <th className="p-2  font-medium text-start" >End Time</th>
          <th className="p-2  font-medium text-start" >Sales</th>
          <th className="p-2  font-medium text-start" >Return</th>
          <th className="p-2  font-medium text-start" >Replace</th>
          <th className="p-2  font-medium text-start" >Order</th>
          <th className="p-2  font-medium text-start" >Receipt</th>
          </tr>
        </thead>
            <tbody>
          {data.map((row) => (
            <tr
              key={row.srl}
              className="text-gray-800  border-b border-gray-100 text-start cursor-pointer"
              onClick={() => onRowClick(row.type, row.name)}
            >
              <td className="p-3 ">{row.srl}</td>
              <td className="p-3 ">{row.name}</td>
              <td className="p-3 ">{row.starttime}</td>
              <td className="p-3 ">{row.endtime}</td>
              <td className="p-3 ">{row.sales}</td>
              <td className="p-3 ">{row.return}</td>
              <td className="p-3 ">{row.replace}</td>
              <td className="p-3 ">{row.order}</td>
              <td className="p-3 ">{row.receipt}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
        </>
    );
};

export default VanTable;