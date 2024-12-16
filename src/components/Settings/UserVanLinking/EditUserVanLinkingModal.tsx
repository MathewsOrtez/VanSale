import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import CustomSwitch from "../../utilis/CustomSwitch";
import CustomizedCheckbox from "../../utilis/CustomCheckbox";
import SearchBar from "../../utilis/SearchBox";
const EditUserVanLinkingModal: React.FC<{
  open: boolean;
  onClose: () => void;
  editData: any;
  onSave: (newRoute: {
    name: string;
    active: boolean;
    linkedvancount: number;
    vans: string[];
  }) => void;
}> = ({ open, onClose, editData, onSave }) => {
  if (!open) return null;
  const [name, setName] = useState(editData?.name);
  const [active, setActive] = useState(editData?.active);
  const [searchTerm, setSearchTerm] = useState("");
  const [vans, setVans] = useState<string[]>(editData?.vans || []);
   const [selectAll, setSelectAll] = useState(false);
    const [selectedVans, setSelectedVans] = useState<string[]>([]);

  // Update state when editData changes (in case props change)
  useEffect(() => {
    setName(editData?.name);
    setActive(editData?.active);
    setVans(editData?.vans || []);
    setSelectedVans(editData?.vans || []);
  }, [editData]);
console.log(editData);
  const handleSave = () => {
    const finalVans = Array.from(new Set([...vans, ...selectedVans]));
    // Prepare the updated data object
    const updatedData = {
      ...editData,
      name,
      active,
      linkedvancount : finalVans.length,
      vans : finalVans,
    };
    onSave(updatedData);
    console.log(updatedData);
    onClose();
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
    <div className="fixed inset-0  mx-auto bg-opacity-50 flex justify-center items-center z-50 animate-fade-down animate-duration-75">
      <div className="bg-white p-6 rounded-2xl w-[555px] h-[550px] border border-gray-200 shadow-2xl">
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
            className="w-full p-2 border border-gray-300 focus:outline-none focus:border-[#D3EFF9] rounded-md"
          >
            <option value="" className="text-sm">Select User</option>
            {Users.map((user) => (
              <option key={user} value={user} className="text-sm">
                {user}
              </option>
            ))}
          </select>
        </div>
        {/* Search and Checkbox Section */}
        <div className="px-6 mt-4 flex items-center gap-5 justify-between ">
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
            <div><span className="text-xs text-gray-600">Select All</span></div>
          </div>
        </div>

        {/* Vans List */}
        <div className="px-6 mt-4 overflow-y-auto h-[260px]">
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

        {/* Modal Footer: Switch and Action Buttons */}
        <div className="flex justify-end items-center mt-4 gap-4">
          <div className="flex items-center gap-2">
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

export default EditUserVanLinkingModal;
