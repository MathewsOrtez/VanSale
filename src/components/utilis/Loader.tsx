import React from "react";
import { ClipLoader } from "react-spinners";

interface LoaderProps {
  size?: number; // Optional size prop
  text?: string; // Optional text prop
}

const Loader: React.FC<LoaderProps> = ({ size = 40, text = "Loading..." }) => {
  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
      <div className="flex flex-col items-center justify-center">
        <ClipLoader color="#25add7" size={size} />
        {text && <p className="mt-4 text-white text-lg">{text}</p>}
      </div>
    </div>
  );
};

export default Loader;
