import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import CustomSwitch from "../utilis/CustomSwitch";
import DeleteIcon from "../../assets/TaxMaster/DeleteIcon.png"
import EditIcon from "../../assets/TaxMaster/EditIcon.png"

interface DeleteTaxModalProps {
  open: boolean;
  onClose: () => void;
  deleteData: { nTaxId: number; cTaxName: string; cShortName: string; bActive: boolean };
  onDelete: (data: { nTaxId: number; cTaxName: string; cShortName: string; bActive: boolean }) => void;
  onSave: (data: { nTaxId: number; cTaxName: string; cShortName: string; bActive: boolean }) => void;
}

const DeleteTaxModal: React.FC<DeleteTaxModalProps> = ({
  open,
  onClose,
  deleteData,
  onDelete,
  onSave,
}) => {

  const [cTaxName, setCTaxName] = useState(deleteData.cTaxName);
  const [cShortName, setCShortname] = useState(deleteData.cShortName);
  const [bActive, setBActive] = useState(deleteData.bActive);
  const [isEditing, setIsEditing] = useState(false); // Track edit mode

  // Sync data when modal is opened with new props
  useEffect(() => {
    if(deleteData){
    setCTaxName(deleteData.cTaxName);
    setCShortname(deleteData.cShortName);
    setBActive(deleteData.bActive);
    }
  }, [deleteData]);

  // Handle Delete
  const handleDelete = () => {
    onDelete(deleteData);
    onClose();
  };

  // Handle Save
  const handleSave = () => {
    const updatedData = { nTaxId: deleteData.nTaxId, cTaxName, cShortName, bActive };
    onSave(updatedData);
    setIsEditing(false); // Exit edit mode after saving
    onClose();
  };

  const handleSwitchChange = (checked: boolean) => {
    setBActive(checked); // Update the local active state
  };

  if (!open) return null;


  return (
    <div className={`fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 animate-fade-down animate-duration-75`}>
      <div className="bg-white p-6 rounded-2xl w-[30rem] border-2 border-gray-200 shadow-2xl">
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Tax Master</h1>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <Close />
          </button>
        </div>

        {/* Modal Body */}
        <div className="my-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium my-2 text-gray-700">
              Name
            </label>
            <input
              id="name"
              className={`w-[426px] h-[35px] border border-gray-200 rounded-md focus:border-[#94cef9] focus:outline-none p-2 ${
                isEditing ? "" : "bg-gray-50 cursor-not-allowed"
              }`}
              value={cTaxName}
              onChange={(e) => setCTaxName(e.target.value)}
              disabled={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="short-name" className="block text-sm font-medium my-2 text-gray-700">
              Short Name
            </label>
            <input
              id="short-name"
              className={` w-[250px] h-[35px] border border-gray-200 rounded-md focus:border-[#94cef9] focus:outline-none p-2 ${
                isEditing ? "" : "bg-gray-50 cursor-not-allowed"
              }`}
              value={cShortName}
              onChange={(e) => setCShortname(e.target.value)}
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Switch and Actions */}
        <div className="flex justify-end items-center mt-4">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-sm">Active/Inactive</span>
            <CustomSwitch
              checked={bActive}
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

export default DeleteTaxModal;
