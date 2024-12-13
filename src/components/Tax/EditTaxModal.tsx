import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import CustomSwitch from "../utilis/CustomSwitch";
const EditTaxModal: React.FC<{ open: boolean; onClose: () => void,editData:any,onSave: (newRoute: { name: string; shortname: string; active: boolean }) => void}> = ({
  open,
  onClose,
  editData,
  onSave
}) => {
  if (!open) return null;
const [name, setName] = useState(editData.name);
const [shortname, setShortname] = useState(editData.shortname);
const [active, setActive] = useState(editData.active);

 // Update state when editData changes (in case props change)
 useEffect(() => {
  setName(editData.name);
  setShortname(editData.shortname);
  setActive(editData.active);
}, [editData]);

const handleSave = () => {
  // Prepare the updated data object
  const updatedData = {
    ...editData,
    name,
    shortname,
    active,
  };
  onSave(updatedData);
  onClose(); 
};

  return (
    <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50 animate-fade-down animate-duration-75">
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
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium my-2 text-gray-700 "
            >
              Name
            </label>
            <input
              id="name"
              className="border border-gray-200 rounded-md p-2 w-[426px] h-[35px] focus:border-[#94cef9] focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              className=" border border-gray-200 rounded-md p-2 w-[250px] h-[35px] focus:border-[#94cef9] focus:outline-none"
              value={shortname}
              onChange={(e) => setShortname(e.target.value)}
            />
          </div>
        </div>

        {/* Modal Footer: Switch and Action Buttons */}
        <div className="flex justify-end items-center mt-4 gap-4">
          <div className="flex items-center gap-2">
            <span className="mr-2 text-sm font-semibold">Active/Inactive</span>
            <CustomSwitch 
            checked={active}
            onChange={(e) => setActive(e.target.checked)}/>
          </div>

          <div className="flex gap-4 ">
            <button className="w-[82px] h-[42px]  font-semibold bg-[#25add7] text-md text-white rounded-md"
            onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTaxModal;
