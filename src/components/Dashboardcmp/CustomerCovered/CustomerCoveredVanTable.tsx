  import React from "react";

  interface CustomerCoveredTableProps {
    data: Array<{type: string;  customers?: Array<{ srl: number; route: string; starttime: string; endtime: string; customercount: number ,customername: string}>}>;
    onRowClick: (type: string, id: number , route: string) => void;
  }

  const CustomerCoveredVanTable: React.FC<CustomerCoveredTableProps> = ({ data , onRowClick}) => {

    return (
      <div className="px-4">
        <table className="w-full border-collapse rounded-md text-sm">
          <thead className="border bg-white text-[#929292]">
            <tr>
              <th className="p-3 font-medium text-start">Srl</th>
              <th className="p-3 font-medium text-start">Route</th>
              <th className="p-3 font-medium text-start">Start Time</th>
              <th className="p-3 font-medium text-start">End Time</th>
              <th className="p-3 font-medium text-start">Customer Count</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              row.customers?.map((customer) => (
                <tr
                  key={customer.srl}
                  className="text-gray-800 bg-white border-b hover:bg-gray-50 hover:border-gray-200 border-gray-100 text-start cursor-pointer"
                  onClick={() => onRowClick(row.type, customer.srl ,customer.route)}
                >
                  <td className="p-3">{customer.srl}</td>
                  <td className="p-3">{customer.route}</td>
                  <td className="p-3">{customer.starttime}</td>
                  <td className="p-3">{customer.endtime}</td>
                  <td className="p-3">{customer.customercount}</td>
                </tr>
              )) || (
                <tr key={rowIndex} className="bg-gray-50">
                  <td colSpan={5} className="p-3 text-center text-gray-500">
                    No customers available
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default CustomerCoveredVanTable;
