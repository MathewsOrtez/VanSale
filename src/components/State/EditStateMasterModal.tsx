import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import CustomSwitch from "../../components/utilis/CustomSwitch";
const EditStateMasterModal: React.FC<{
  open: boolean;
  onClose: () => void;
  editData: any;
  onSave: (newRoute: {
    nStateId: number;
    cStateName: string;
    cShortName: string;
    bActive: boolean;
    cStateCode: string;
  }) => void;
}> = ({ open, onClose, editData, onSave }) => {
  const [cStateName, setcStateName] = useState(editData.cStateName);
  const [cShortName, setcShortName] = useState(editData.cShortName);
  const [bActive, setbActive] = useState(editData.bActive);
  const [cStateCode, setcStateCode] = useState(editData.cStateCode);

  // Update state when editData changes (in case props change)
  useEffect(() => {
    setcStateName(editData.cStateName);
    setcShortName(editData.cShortName);
    setbActive(editData.bActive);
    setcStateCode(editData.cStateCode);
  }, [editData]);

  const handleSave = () => {
    // Prepare the updated data object
    const updatedData = {
      ...editData,
      cStateName,
      cShortName,
      bActive,
      cStateCode,
    };
    onSave(updatedData);
    onClose();
  };
  if (!open) return null;
  return (
    <div className="fixed inset-0  mx-auto bg-opacity-50 flex justify-center items-center z-50 animate-fade-down animate-duration-75">
      <div className="bg-white p-6 rounded-2xl w-[784px] h-[320px] border-2 border-gray-200 shadow-2xl">
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">State Master</h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <Close />
          </button>
        </div>

        {/* Modal Body: Input Fields */}
        <div className="my-4 flex w-full gap-7">
          <div className="mb-4 w-[426px] h-[35px]">
            <label
              htmlFor="name"
              className="block text-sm font-medium my-2 text-gray-700 "
            >
              Name
            </label>
            <input
              id="name"
              className="w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none"
              value={cStateName}
              onChange={(e) => setcStateName(e.target.value)}
            />
          </div>
          <div className="mb-4 w-[298px] h-[35px]">
            <label
              htmlFor="short-name"
              className="block text-sm font-medium my-2 text-gray-700"
            >
              Short Name
            </label>
            <input
              id="short-name"
              className="w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none"
              value={cShortName}
              onChange={(e) => setcShortName(e.target.value)}
            />
          </div>
        </div>

        <div className="my-7 flex w-full gap-7">
          <div className="mb-4 w-[262px] h-[35px]">
            <label
              htmlFor="statecode"
              className="block text-sm font-medium my-2 text-gray-700 "
            >
              State Code
            </label>
            <input
              id="statecode"
              className="w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none"
              value={cStateCode}
              onChange={(e) => setcStateCode(e.target.value)}
            />
          </div>
        </div>

        {/* Modal Footer: Switch and Action Buttons */}
        <div className="flex justify-end items-center mt-4 gap-4">
          <div className="flex items-center gap-2">
            <span className="mr-2 font-semibold text-sm">Active/Inactive</span>
            <CustomSwitch
              checked={bActive}
              onChange={(e) => setbActive(e.target.checked)}
            />
          </div>

          <div className="flex gap-4 ">
            <button
              className="w-[82px] h-[42px]  font-semibold bg-[#25add7] text-xl text-white rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStateMasterModal;
