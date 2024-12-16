import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import CustomSwitch from "../../utilis/CustomSwitch";
import DeleteIcon from "../../../assets/TaxMaster/DeleteIcon.png";
import EditIcon from "../../../assets/TaxMaster/EditIcon.png";
import CustomizedCheckbox from "../../utilis/CustomCheckbox";
import SearchBar from "../../utilis/SearchBox";

interface DeleteUserVanLinkingModalProps {
  open: boolean;
  onClose: () => void;
  deleteData: {
    srl: number;
    name: string;
    active: boolean;
    linkedvancount: number;
    vans: any;
  };
  onDelete: (data: {
    srl: number;
    name: string;
    active: boolean;
    linkedvancount: number;
    vans: any;
  }) => void;
  onSave: (data: {
    srl: number;
    name: string;
    active: boolean;
    linkedvancount: number;
    vans: any;
  }) => void;
}

const DeleteUserVanLinkingModal: React.FC<DeleteUserVanLinkingModalProps> = ({
  open,
  onClose,
  deleteData,
  onDelete,
  onSave,
}) => {
  if (!open) return null;

  const [name, setName] = useState(deleteData.name);
  const [active, setActive] = useState(deleteData.active);
  const [isEditing, setIsEditing] = useState(false); // Track edit mode
  const [searchTerm, setSearchTerm] = useState("");
  const [vans, setVans] = useState<string[]>(deleteData?.vans || []);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedVans, setSelectedVans] = useState<string[]>([]);
  console.log(deleteData);
  // Sync data when modal is opened with new props
  useEffect(() => {
    setName(deleteData.name);
    setVans(deleteData.vans);
    setActive(deleteData.active);
    setSelectedVans(deleteData?.vans || []);
  }, [deleteData]);

  // Handle Delete
  const handleDelete = () => {
    onDelete(deleteData);
    onClose();
  };

  // Handle Save
  const handleSave = () => {
    const finalVans = Array.from(
      new Set([...vans, ...selectedVans])
    );
    const updatedData = {
      ...deleteData,
      name,
      active,
      linkedvancount: finalVans.length,
      vans: finalVans,
    };
    onSave(updatedData);
    setIsEditing(false); // Exit edit mode after saving
    onClose();
  };

  const handleSwitchChange = (checked: boolean) => {
    setActive(checked); // Update the local active state
  };

  const Users = [
    "User 1",
    "User 2",
    "User 3",
    "Mathews Thomas",
    "Sithu",
    "Amal",
  ];

  const Vans = ["Van 1","Van 2","Van 3","Van 4","Van 5","Kakkand Route", "Highway", "Kaloor", "Jetty", "Chalakudi"];

  const handleSearch = (value: string) => {
    setSearchTerm(value.toLowerCase());
  };

  const filteredVans = Vans.filter((van) =>
    van.toLowerCase().includes(searchTerm)
  );

  const toggleVanSelection = (van: string) => {
    setSelectedVans((prevSelected) => {
      const isSelected = prevSelected.includes(van);
      const updatedSelection = isSelected
        ? prevSelected.filter((item) => item !== van)
        : [...prevSelected, van];
  
      // Update the vans array to reflect the changes
      setVans((prevVans) =>
        isSelected ? prevVans.filter((item) => item !== van) : [...prevVans, van]
      );
  
      return updatedSelection;
    });
  };
  
  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      // Add the filtered vans to the selection
      setSelectedVans((prevSelected) => Array.from(new Set([...prevSelected, ...filteredVans])));
      setVans((prevVans) => Array.from(new Set([...prevVans, ...filteredVans])));
    } else {
      // Remove the filtered vans from the selection
      setSelectedVans((prevSelected) => prevSelected.filter((van) => !filteredVans.includes(van)));
      setVans((prevVans) => prevVans.filter((van) => !filteredVans.includes(van)));
    }
  };
  

  return (
    <div
      className={`fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 animate-fade-down animate-duration-75`}
    >
      <div
        className={`bg-white p-6 rounded-2xl w-[555px]  ${
          isEditing ? "h-[550px]" : "h-[495px]"
        } border border-gray-200 shadow-2xl`}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">User - Van Linking</h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <Close />
          </button>
        </div>
        {/* User Input Section */}
        <div className="px-6 mt-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            User
          </label>
          <select
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!isEditing}
            className={`w-full p-2 border border-gray-300 focus:outline-none focus:border-[#D3EFF9] rounded-md ${
              isEditing ? "" : "bg-gray-50 cursor-not-allowed"
            }`}
          >
            <option value="" className="text-sm">
              Select User
            </option>
            {Users.map((user) => (
              <option key={user} value={user} className="text-sm">
                {user}
              </option>
            ))}
          </select>
        </div>
        {/* Linked Vans Section */}
        <div
          className={`px-6 mt-4  overflow-y-auto h-[260px] ${
            isEditing ? "hidden" : "block"
          }`}
        >
          <div>
            <p className="text-md font-semibold py-1">Linked Vans</p>
          </div>
          {vans.length === 0 && (
            <p className="text-sm py-2 px-4 text-gray-600 rounded-md bg-[#F0FBFF] border border-[#D3EFF9] mb-2">
              No vans found.
            </p>
          )}
          {vans.map((van, index) => (
            <div
              key={index}
              className="flex w-full h-[55px] items-center py-2 px-4 rounded-md bg-[#F0FBFF] border border-[#D3EFF9] mb-2"
            >
              <span className="ml-2 text-sm text-gray-700">{van}</span>
            </div>
          ))}
        </div>
        {/* Search and Checkbox Section */}
        <div
          className={`px-6 mt-4 flex items-center gap-5 justify-between ${
            isEditing ? "block" : " hidden"
          } `}
        >
          <div className="w-[332px] h-[32px]">
            <SearchBar
              placeholder="Choose Vans to Link..."
              onSearch={handleSearch}
            />
          </div>
          <div className="flex items-center gap-2 justify-between">
            <div>
              <CustomizedCheckbox
                checked={selectAll}
                onChange={toggleSelectAll}
              />
            </div>
            <div>
              <span className="text-xs text-gray-600">Select All</span>
            </div>
          </div>
        </div>

        {/* Vans List */}
        <div
          className={`px-6 mt-4 overflow-y-auto h-[260px] ${
            isEditing ? "block" : " hidden"
          }`}
        >
          {filteredVans.length === 0 && (
            <p className="text-sm py-2 px-4 text-gray-600 rounded-md bg-[#F0FBFF] border border-[#D3EFF9] mb-2">
              No vans found.
            </p>
          )}
          {filteredVans.map((van, index) => (
            <div
              key={index}
              className="flex items-center py-2 px-4 rounded-md bg-[#F0FBFF] border border-[#D3EFF9] mb-2"
            >
              <CustomizedCheckbox
                checked={selectedVans.includes(van)}
                onChange={() => toggleVanSelection(van)}
              />
              <span className="ml-2 text-sm text-gray-700">{van}</span>
            </div>
          ))}
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
              className={`text-white p-2 flex justify-center items-center hover:bg-red-700 bg-red-600 rounded-md w-[42px] h-[42px] ${
                isEditing ? `hidden` : ``
              }`}
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

export default DeleteUserVanLinkingModal;
