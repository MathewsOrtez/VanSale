import React from "react";

interface Customer {
  srl: number;
  customername?: string;
}

interface CustomerCoveredTableProps {
  data: Array<{
    customers?: Customer[];
  }>;
}

const CustomerCoveredOutletTable: React.FC<CustomerCoveredTableProps> = ({
  data,
}) => {
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
          {data.length === 0 || !data.some((row) => row.customers?.length) ? (
            <tr className="bg-gray-50">
              <td
                colSpan={2}
                className="p-3 text-center text-gray-500 border border-gray-200"
              >
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) =>
              row.customers?.map((customer) => (
                <tr
                  key={`${rowIndex}-${customer.srl}`}
                  className="text-gray-800 bg-white hover:bg-gray-50 hover:border-gray-200 border-b border-gray-100 text-start"
                >
                  <td className="p-3">{customer.srl}</td>
                  <td className="p-3 flex items-center justify-start gap-4">
                    {customer.customername}
                  </td>
                </tr>
              ))
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerCoveredOutletTable;
