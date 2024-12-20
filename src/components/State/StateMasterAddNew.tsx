import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import CustomSwitch from "../../components/utilis/CustomSwitch";
import { useStateData } from "../../context/StateContext";

interface StateMasterNewModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (newData: {
    cStateName: string;
    cShortName: string;
    bActive: boolean;
    cStateCode: string;
  }) => void;
}
const StateMasterAddNew: React.FC<StateMasterNewModalProps> = ({
  open,
  onClose,
  onSave,
}) => {
  const [cStateName, setcStateName] = useState("");
  const [cShortName, setcShortName] = useState("");
  const [bActive, setbActive] = useState(false);
  const [cStateCode, setcStateCode] = useState("");
  const { addState } = useStateData();

  const handleSave = () => {
    if (cStateName && cShortName) {
      addState({ cStateName, cShortName, bActive, cStateCode });
      setcStateName("");
      setcShortName("");
      setbActive(false);
      setcStateCode("");
      console.log({ cStateName, cShortName, bActive, cStateCode });
      onClose();
    } else {
      alert("Please fill out all fields.");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50 animate-fade-down animate-duration-75">
      <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-2xl w-[784px] h-[320px]">
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
        <div className="my-4 flex gap-7">
          <div className="mb-4 w-[426px] h-[35px]">
            <label
              htmlFor="name"
              className="block text-sm font-medium my-2 text-gray-700 "
            >
              Name
            </label>
            <input
              id="name"
              value={cStateName}
              onChange={(e) => setcStateName(e.target.value)}
              className="w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none"
            />
          </div>
          <div className="mb-4 w-[298px] h-[35px]">
            <label
              htmlFor="short-name"
              className="block text-sm font-medium my-2 text-gray-700 "
            >
              Short Name
            </label>
            <input
              id="short-name"
              value={cShortName}
              onChange={(e) => setcShortName(e.target.value)}
              className="w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none"
            />
          </div>
        </div>
        <div className=" flex gap-7 my-7">
          <div className="mb-4 w-[262px] h-[35px]">
            <label
              htmlFor="statecode"
              className="block text-sm font-medium my-2 text-gray-700 "
            >
              State Code
            </label>
            <input
              id="statecode"
              value={cStateCode}
              onChange={(e) => setcStateCode(e.target.value)}
              className="w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none"
            />
          </div>
        </div>

        {/* Modal Footer: Switch and Action Buttons */}
        <div className="flex justify-end items-center mt-4 gap-4">
          <div className="flex items-center gap-2">
            <span className="mr-2 text-sm font-semibold">Active/Inactive</span>
            <CustomSwitch
              checked={bActive}
              onChange={(e) => setbActive(e.target.checked)}
            />
          </div>

          <div className="flex gap-4 ">
            <button
              className=" font-semibold hover:shadow-xl bg-[#25add7] text-xl text-white w-[82px] h-[42px]  rounded-md"
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

export default StateMasterAddNew;
