import React from "react";
import { InputAdornment } from "@mui/material";
import SearchIcon from "../../assets/SearchIcon.png";

interface SearchBarProps {
  onSearch: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = "Search...", className }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className={`flex items-center border border-gray-300 hover:border-gray-400 rounded-md ${className || ""}`} style={{backgroundColor:"white"}}>
      <InputAdornment position="start" className="px-2  py-2">
        <img src={SearchIcon} alt="Search" className="w-5 h-4" />
      </InputAdornment>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border-none outline-none rounded-md"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
