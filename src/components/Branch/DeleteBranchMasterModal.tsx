import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import CustomSwitch from "../utilis/CustomSwitch";
import DeleteIcon from "../../assets/TaxMaster/DeleteIcon.png"
import EditIcon from "../../assets/TaxMaster/EditIcon.png"
import { useBranch } from "../../context/BranchContext";
interface DeleteBranchMasterModalProps {
  open: boolean;
  onClose: () => void;
  deleteData: { srl: number; name: string; shortname: string; active: boolean, state: string, shopadress: string, email: string, phone: string, gstnumber: string };
  onDelete: (data: { srl: number; name: string; shortname: string; active: boolean, state: string, shopadress: string, email: string, phone: string, gstnumber: string }) => void;
  onSave: (data: { srl: number; name: string; shortname: string; active: boolean, state: string, shopadress: string, email: string, phone: string, gstnumber: string }) => void;
}

const DeleteBranchMasterModal: React.FC<DeleteBranchMasterModalProps> = ({
  open,
  onClose,
  deleteData,
  onDelete,
  onSave,
}) => {
  if (!open) return null;
  const { stateOptionsData} = useBranch();
  const [name, setName] = useState(deleteData.name);
  const [shortname, setShortname] = useState(deleteData.shortname);
  const [active, setActive] = useState(deleteData.active);
  const [isEditing, setIsEditing] = useState(false); // Track edit mode
  const [state, setState] = useState(deleteData.state);
  const [shopadress, setShopadress] = useState(deleteData.shopadress);
  const [email, setEmail] = useState(deleteData.email);
  const [phone, setPhone] = useState(deleteData.phone);
  const [gstnumber, setGstnumber] = useState(deleteData.gstnumber);

  // Sync data when modal is opened with new props
  useEffect(() => {
    setName(deleteData.name);
    setShortname(deleteData.shortname);
    setActive(deleteData.active);
    setState(deleteData.state);
    setShopadress(deleteData.shopadress);
    setEmail(deleteData.email);
    setPhone(deleteData.phone);
    setGstnumber(deleteData.gstnumber);
  }, [deleteData]);

  // Handle Delete
  const handleDelete = () => {
    onDelete(deleteData);
    onClose();
  };

  // Handle Save
  const handleSave = () => {
    const updatedData = { srl: deleteData.srl, name, shortname, active, state, shopadress, email, phone, gstnumber };
    onSave(updatedData);
    setIsEditing(false); // Exit edit mode after saving
    onClose();
  };

  const handleSwitchChange = (checked: boolean) => {
    setActive(checked); // Update the local active state
  };


  return (
    <div className={`fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 animate-fade-down animate-duration-75`}>
      <div className="bg-white p-6 rounded-2xl w-[805px] h-[500px] border-2 border-gray-200 shadow-2xl">
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Branch Master</h1>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <Close />
          </button>
        </div>

        {/* Modal Body */}
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
              disabled={!isEditing}
              className={`w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none ${isEditing ? "" : "bg-gray-50 cursor-not-allowed"}`}
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
              disabled={!isEditing}
              className={`w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none ${isEditing ? "" : "bg-gray-50 cursor-not-allowed"}`}
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
              disabled={!isEditing}
              className={`w-full h-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none ${isEditing ? "" : "bg-gray-50 cursor-not-allowed"}`}
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
              disabled={!isEditing}
              className={`w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none ${isEditing ? "" : "bg-gray-50 cursor-not-allowed"}`}
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
              disabled={!isEditing}
              className={`w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none ${isEditing ? "" : "bg-gray-50 cursor-not-allowed"}`}
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
              disabled={!isEditing}
              className={`w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none ${isEditing ? "" : "bg-gray-50 cursor-not-allowed"}`}
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
              disabled={!isEditing}
              className={`w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none ${isEditing ? "" : "bg-gray-50 cursor-not-allowed"}`}
            >
              {/* Options for states */}
              {stateOptionsData.map((option: { value: string; label: string }) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Switch and Actions */}
        <div className="flex justify-end items-center mt-4">
          <div className="flex items-center gap-4 my-6">
            <span className="text-sm font-semibold">Active/Inactive</span>
            <CustomSwitch
              checked={active}
              onChange={(_e, checked) => handleSwitchChange(checked)}
              disabled={!isEditing} // Switch is enabled only in edit mode
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {isEditing ? (
              <button
                className="bg-[#25add7] text-[18px] font-semibold text-white p-2 rounded-md hover:shadow-xl w-[82px] h-[42px]"
                onClick={handleSave}
              >
                Save
              </button>
            ) : (
              <button
                className="text-black p-2 w-[42px] h-[42px] hover:border-gray-700  border border-black rounded-md flex justify-center items-center"
                onClick={() => setIsEditing(true)}
              >
                <img src={EditIcon} />
              </button>
            )}
            <button
              className={`text-white p-2 flex justify-center items-center hover:bg-red-700 bg-red-600 rounded-md w-[42px] h-[42px] ${isEditing? `hidden`: ``}`}
              onClick={handleDelete}
            >
              <img src={DeleteIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBranchMasterModal;
