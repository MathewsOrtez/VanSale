import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import CustomSwitch from "../../utilis/CustomSwitch";
import { useUserVanLinking } from "../../../context/UserVanLinkingContext";
import BackGroundLinkImage from "../../../assets/UserVanLinkingAddBg.png";
import SearchBar from "../../utilis/SearchBox";
import CustomizedCheckbox from "../../utilis/CustomCheckbox";
import CustomAlert from "../../utilis/CustomAlert";

interface UserVanLinkingNewModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (newData: {
    name: string;
    shortname: string;
    active: boolean;
    statecode: string;
  }) => void;
}

const UserVanLinkingAddNew: React.FC<UserVanLinkingNewModalProps> = ({
  open,
  onClose,
  onSave,
}) => {
  const [name, setName] = useState("");
  const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVans, setSelectedVans] = useState<string[]>([]);
  const [vans, setVans] = useState<string[]>([
    "Van 1",
    "Van 2",
    "Van 3",
    "Van 4",
    "Van 5",
  ]);
  const [selectAll, setSelectAll] = useState(false);

  const { addUserVanLinking } = useUserVanLinking();

  const handleSave = () => {
    if (name) {
      const linkedCount = selectedVans.length;
      addUserVanLinking({
        name,
        active,
        vans: selectedVans,
        linkedvancount: linkedCount,
      });
      console.log({
        name,
        active,
        vans: selectedVans,
        linkedvancount: linkedCount,
      });
      setName("");
      setActive(false);
      setSelectedVans([]);
      setSelectAll(false);
      onClose();
      CustomAlert({ type: "success", message: "Data Added successfully." });
    } else {
      CustomAlert({ type: "error", message: "Please fill out all fields." });
    }
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value.toLowerCase());
  };

  const filteredVans = vans.filter((van) =>
    van.toLowerCase().includes(searchTerm)
  );

  const toggleVanSelection = (van: string) => {
    setSelectedVans((prevSelected) =>
      prevSelected.includes(van)
        ? prevSelected.filter((item) => item !== van)
        : [...prevSelected, van]
    );
  };

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedVans(filteredVans);
    } else {
      setSelectedVans([]);
    }
  };
  if (!open) return null;

  const Users = [
    "User 1",
    "User 2",
    "User 3",
    "Mathews Thomas",
    "Sithu",
    "Amal",
  ];

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 animate-fade-down animate-duration-75">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-xl w-[555px] h-[550px] flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-between items-center px-6 py-4 border-gray-300">
          <h1 className="text-lg font-semibold">User - Van Linking</h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <Close />
          </button>
        </div>

        {/* Upgrade Now Section */}
        <div
          style={{ backgroundImage: `url(${BackGroundLinkImage})` }}
          className=" bg-no-repeat bg-center px-6 p-4  mt-4 flex flex-col justify-between"
        >
          <div >
          <p className="text-md h-[29px] font-light text-white">
            The maximum limit for linking users to a van is 5. Upgrade your plan
            to link more.
          </p>
          </div>
        <div className="flex justify-end  items-end ">
        <button className=" rounded w-[124px] h-[29px] bg-black text-white text-[14px] hover:border">
            Upgrade Now
          </button>
        </div>
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
            <option value="" className="text-sm" disabled>
              Select User
            </option>
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
            <SearchBar placeholder="Choose Vans to Link..." onSearch={handleSearch} />
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
        <div className="px-6 mt-4 overflow-y-auto">
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

        {/* Footer */}
        <div className="px-6 mt-auto flex justify-end items-center gap-4 py-4 border-gray-300">
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold">Active/Inactive</span>
            <CustomSwitch
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
            />
          </div>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[#25ADD7] text-white rounded-md hover:shadow-md w-[82px] h-[42px]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserVanLinkingAddNew;
