import React from "react";

interface RouteCustomer {
  srl: number;
  customername: string;
}

interface CustomerCoveredTableProps {
  data: RouteCustomer[];
}

const CustomerCoveredVanInnerTable: React.FC<CustomerCoveredTableProps> = ({ data }) => {
  return (
    <div className="px-4">
      <table className="w-full border-collapse rounded-md text-sm">
        <thead className="border bg-white text-[#929292]">
          <tr>
            <th className="p-3 font-medium text-start">Srl</th>
            <th className="p-3 font-medium text-start">Customer Name</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((customer) => (
              <tr
                key={customer.srl}
                className="text-gray-800 bg-white border-b hover:bg-gray-50 hover:border-gray-200 border-gray-100 text-start"
              >
                <td className="p-3">{customer.srl}</td>
                <td className="p-3">{customer.customername}</td>
              </tr>
            ))
          ) : (
            <tr className="bg-gray-50">
              <td colSpan={2} className="p-3 text-center text-gray-500 border border-gray-200">
                No customers available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerCoveredVanInnerTable;
