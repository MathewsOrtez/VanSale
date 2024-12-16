import React from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/avthar.png";
const Header: React.FC = () => {
  // const Headeritem: string[] = ["Kakkanad", "Mathews Thomas"];
  return (
    <>
      <div className="flex items-center justify-between px-4 py-2 shadow-sm  h-[57.22px]">
        <div className="flex items-center gap-2"> 
          <div>
            <img src={logo} />
          </div>
          <div className="capitalize font-semibold py-2">Ortez InfoTech</div>
        </div>
        <div className="flex items-center gap-4">
          <div>
           <p className="capitalize font-medium text-sm">Kakkand, Mathews Thomas</p>
          </div>
          <div>
            <img src={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
