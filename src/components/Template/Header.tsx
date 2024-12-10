import React from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/avthar.png";
const Header: React.FC = () => {
  const Headeritem: string[] = ["Kakkanad", "Mathews Thomas"];
  return (
    <>
      <div className="flex items-center justify-between px-4 py-2 shadow-xl border-b border-gray-100">
        <div className="flex items-center gap-2"> 
          <div>
            <img src={logo} />
          </div>
          <div className="capitalize font-semibold py-2">Ortez InfoTech</div>
        </div>
        <div className="flex">
          <div>
            {Headeritem.map((item, index) => (
              <button key={index} className={` py-2 px-4 rounded-full font-semibold`}>
                {item}
              </button>
            ))}
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
