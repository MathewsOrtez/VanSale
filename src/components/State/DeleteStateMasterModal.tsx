import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import CustomSwitch from "../utilis/CustomSwitch";
import DeleteIcon from "../../assets/TaxMaster/DeleteIcon.png"
import EditIcon from "../../assets/TaxMaster/EditIcon.png"

interface DeleteStateMasterModalProps {
  open: boolean;
  onClose: () => void;
  deleteData: { srl: number; name: string; shortname: string; active: boolean, statecode: string };
  onDelete: (data: { srl: number; name: string; shortname: string; active: boolean, statecode: string }) => void;
  onSave: (data: { srl: number; name: string; shortname: string; active: boolean, statecode: string }) => void;
}

const DeleteStateMasterModal: React.FC<DeleteStateMasterModalProps> = ({
  open,
  onClose,
  deleteData,
  onDelete,
  onSave,
}) => {
  if (!open) return null;

  const [name, setName] = useState(deleteData.name);
  const [shortname, setShortname] = useState(deleteData.shortname);
  const [active, setActive] = useState(deleteData.active);
  const [isEditing, setIsEditing] = useState(false); // Track edit mode
  const [statecode, setStatecode] = useState(deleteData.statecode);

  // Sync data when modal is opened with new props
  useEffect(() => {
    setName(deleteData.name);
    setShortname(deleteData.shortname);
    setActive(deleteData.active);
    setStatecode(deleteData.statecode);
  }, [deleteData]);

  // Handle Delete
  const handleDelete = () => {
    onDelete(deleteData);
    onClose();
  };

  // Handle Save
  const handleSave = () => {
    const updatedData = { srl: deleteData.srl, name, shortname, active, statecode };
    onSave(updatedData);
    setIsEditing(false); // Exit edit mode after saving
    onClose();
  };

  const handleSwitchChange = (checked: boolean) => {
    setActive(checked); // Update the local active state
  };

  return (
    <div className={`fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 animate-jump-in `}>
      <div className="bg-white p-6 rounded-2xl w-[784px] h-[285px] border-2 border-gray-200 shadow-2xl">
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">State Master</h1>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <Close />
          </button>
        </div>

        {/* Modal Body */}
        <div className="my-4 flex w-full gap-7">
          <div className="mb-4 w-[426px] h-[35px]">
            <label htmlFor="name" className="block text-sm font-medium my-2 text-gray-700">
              Name
            </label>
            <input
              id="name"
              className={`w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none ${
                isEditing ? "" : "bg-gray-50 cursor-not-allowed"
              }`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditing}
            />
          </div>
          <div className="mb-4 w-[298px] h-[35px]">
            <label htmlFor="short-name" className="block text-sm font-medium my-2 text-gray-700">
              Short Name
            </label>
            <input
              id="short-name"
              className={`w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none ${
                isEditing ? "" : "bg-gray-50 cursor-not-allowed"
              }`}
              value={shortname}
              onChange={(e) => setShortname(e.target.value)}
              disabled={!isEditing}
            />
          </div>
        </div>
        <div className="my-7 flex w-full gap-7">
        <div className="mb-4 w-[298px] h-[35px]">
            <label htmlFor="statecode" className="block text-sm font-medium my-2 text-gray-700">
              State Code
            </label>
            <input
              id="statecode"
              className={`w-full border border-gray-200 rounded-md p-2 focus:border-[#94cef9] focus:outline-none ${
                isEditing ? "" : "bg-gray-50 cursor-not-allowed"
              }`}
              value={statecode}
              onChange={(e) => setStatecode(e.target.value)}
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Switch and Actions */}
        <div className="flex justify-end items-center mt-4">
          <div className="flex items-center gap-4">
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

export default DeleteStateMasterModal;