import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const VanSummaryTable: React.FC = () => {
  const [openRows, setOpenRows] = useState<Record<number, boolean>>({});

  const data = [
    {
      item: "BC Appam Butter",
      opening: 18,
      nettrans: 28,
      closing: 2,
      sale: 10,
      return: 10,
      replace: 10,
    },
    {
      item: "Appam",
      opening: 10,
      nettrans: 10,
      closing: 10,
      sale: 20,
      return: 20,
      replace: 20,
    },
    {
      item: "BC Appam Butter",
      opening: 18,
      nettrans: 28,
      closing: 2,
      sale: 30,
      return: 30,
      replace: 30,
    },
  ];

  const handleDropdownClick = (index: number) => {
    setOpenRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="px-4 py-4">
      <table className="w-full border-collapse rounded-md text-sm">
        <thead className="border bg-white text-[#a2a2a2]">
          <tr>
            <th className="p-2 font-medium text-start">Item Name</th>
            <th className="p-2 font-medium text-start">Openings</th>
            <th className="p-2 font-medium text-start">Net Trans</th>
            <th className="p-2 font-medium text-start">Closing</th>
            <th className="p-2 font-medium text-start">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <React.Fragment key={index}>
              <tr className="text-gray-800 border-b border-gray-100 cursor-pointer">
                <td className="p-2">{row.item}</td>
                <td className="p-2">{row.opening}</td>
                <td className="p-2">{row.nettrans}</td>
                <td className="p-2">{row.closing}</td>
                <td className="p-2 flex justify-end">
                  <button
                    onClick={() => handleDropdownClick(index)}
                    className="text-[#a2a2a2]"
                  >
                    {openRows[index] ? (
                      <KeyboardArrowDownIcon fontSize="medium" />
                    ) : (
                      <KeyboardArrowRightIcon fontSize="medium" />
                    )}
                  </button>
                </td>
              </tr>
              {openRows[index] && (
                <tr className="bg-[#f7f7f7]">
                <td colSpan={5} className="p-4">
                  <div className="space-y-4 ">
                    <div className="font-semibold flex  items-center w-[10rem] justify-between">
                      <span className="text-[#a2a2a2]">Sale:</span> <span>{row.sale}</span>
                    </div>
                    <div className="font-semibold flex items-center w-[10rem] justify-between">
                      <span className="text-[#a2a2a2]">Return:</span> <span>{row.return}</span>
                    </div>
                    <div className="font-semibold flex  items-center w-[10rem] justify-between">
                      <span className="text-[#a2a2a2]">Replace:</span> <span>{row.replace}</span>
                    </div>
                  </div>
                </td>
              </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VanSummaryTable;
