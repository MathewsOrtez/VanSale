import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import CustomSwitch from "../../components/utilis/CustomSwitch";
import { useTax } from "../../context/TaxContext";

interface NewRouteModalProps {
    open: boolean;
    onClose: () => void;
    onSave: (newData: { name: string; shortname: string; active: boolean }) => void;
  }
const TaxAddNew: React.FC<NewRouteModalProps> = ({
  open,
  onClose,
}) => {
    const [name, setName] = useState("");
    const [shortname, setShortname] = useState("");
    const [active, setActive] = useState(false);
    const { addTax } = useTax();

    const handleSave = () => {
        if (name && shortname) {
            addTax({ name, shortname, active });
          setName("");
          setShortname("");
          setActive(false);
          console.log({ name, shortname, active });
          onClose();
        } else {
          alert("Please fill out all fields.");
        }
      };
    
    
  if (!open) return null;
 

  return (
    <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50 animate-jump-in bg-slate-50">
      <div className="bg-white p-6 rounded-2xl w-[30rem] border-2 border-gray-200 shadow-2xl">
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Tax Master</h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <Close />
          </button>
        </div>

        {/* Modal Body: Input Fields */}
        <div className="my-4">
          <div className="mb-4 ">
            <label
              htmlFor="name"
              className="block text-sm font-medium my-2 text-gray-700 "
            >
              Name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[426px] h-[35px] border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="short-name"
            
              className="block text-sm font-medium my-2 text-gray-700"
            >
              Short Name
            </label>
            <input
              id="short-name"
              value={shortname}
              onChange={(e) => setShortname(e.target.value)}
              className="w-[250px] h-[35px] border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none"
            />
          </div>
        </div>

        {/* Modal Footer: Switch and Action Buttons */}
        <div className="flex justify-end items-center mt-4 gap-4">
          <div className="flex justify-center items-center gap-2">
            <span className="mr-2 font-semibold text-sm">Active/Inactive</span>
            <CustomSwitch  checked={active} onChange={(e) => setActive(e.target.checked)} />
          </div>

          <div className="flex gap-4 ">
            <button className=" font-semibold hover:shadow-xl bg-[#25add7] w-[82px] h-[42px] text-xl text-white  rounded-md"
            onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxAddNew;