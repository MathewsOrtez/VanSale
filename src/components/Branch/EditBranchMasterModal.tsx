import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import CustomSwitch from "../utilis/CustomSwitch";
import { useBranch } from "../../context/BranchContext";
const EditBranchMasterModal: React.FC<{
  open: boolean;
  onClose: () => void;
  editData: any;
  onSave: (newBranch: {
    name: string;
    shortname: string;
    active: boolean;
    statecode: string;
  }) => void;
}> = ({ open, onClose, editData, onSave }) => {
  if (!open) return null;
  const {branchData ,stateOptionsData} = useBranch();
  const [name, setName] = useState(editData.name);
  const [shortname, setShortname] = useState(editData.shortname);
  const [active, setActive] = useState(editData.active);
  const [shopadress, setShopadress] = useState(branchData.shopadress);
  const [email, setEmail] = useState(editData.email);
  const [phone, setPhone] = useState(editData.phone);
  const [gstnumber, setGstnumber] = useState(editData.gstnumber);
  const [state, setState] = useState(editData.state);

  // Update state when editData changes (in case props change)
  useEffect(() => {
    setName(editData.name);
    setShortname(editData.shortname);
    setActive(editData.active);
    setShopadress(editData.shopadress);
    setEmail(editData.email);
    setPhone(editData.phone);
    setGstnumber(editData.gstnumber);
    setState(editData.state);
  }, [editData]);

  const handleSave = () => {
    // Prepare the updated data object
    const updatedData = {
      ...editData,
      name,
      shortname,
      active,
      shopadress,
      email,
      phone,
      gstnumber,
      state,
    };
    onSave(updatedData);
    onClose();
  };

  return (
    <div className="fixed inset-0  mx-auto bg-opacity-50 flex justify-center items-center z-50 animate-jump-in bg-slate-50">
      <div className="bg-white p-6 rounded-2xl w-[805px] h-[500px] border-2 border-gray-200 shadow-2xl">
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Branch Master</h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <Close />
          </button>
        </div>

        <div className="my-4 flex gap-7">
          <div className="mb-4 w-[504px] h-[35px]">
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
              className="w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none"
            />
          </div>
          <div className="mb-4 w-[237px] h-[35px]">
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
              className="w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none"
            />
          </div>
        </div>
        <div className="my-6 flex gap-7 ">
          <div className="mb-4 w-[765px] h-[102px]">
            <label
              htmlFor="shopaddress"
              className="block text-sm font-medium my-2 text-gray-700 "
            >
              Shop Address
            </label>
            <textarea
              id="shopaddress"
              value={shopadress}
              onChange={(e) => setShopadress(e.target.value)}
              className="w-full h-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none"
            />
          </div>
        </div>

        <div className="my-6 flex gap-7">
          <div className="mb-4 w-[468px] h-[35px]">
            <label
              htmlFor="email"
              className="block text-sm font-medium my-2 text-gray-700 "
            >
              Email
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none"
            />
          </div>
          <div className="mb-4 w-[273px] h-[35px]">
            <label
              htmlFor="phone"
              className="block text-sm font-medium my-2 text-gray-700"
            >
              Phone Number
            </label>
            <input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none"
            />
          </div>
        </div>
        <div className="my-6 flex gap-7">
          <div className="mb-4 w-[351px] h-[35px]">
            <label
              htmlFor="gstnumber"
              className="block text-sm font-medium my-2 text-gray-700 "
            >
              GST Number
            </label>
            <input
              id="gstnumber"
              value={gstnumber}
              onChange={(e) => setGstnumber(e.target.value)}
              className="w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none"
            />
          </div>
          <div className="mb-4 w-[390px] h-[35px]">
            <label
              htmlFor="state"
              className="block text-sm font-medium my-2 text-gray-700"
            >
              State
            </label>
            <select
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none"
            >
              {/* Options for states */}
              {stateOptionsData.map((option: { value: string; label: string }) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Modal Footer: Switch and Action Buttons */}
        <div className="flex justify-end items-center mt-4 gap-4">
          <div className="flex items-center gap-2 my-6">
            <span className="mr-2 font-semibold text-sm">Active/Inactive</span>
            <CustomSwitch
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
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

export default EditBranchMasterModal;
