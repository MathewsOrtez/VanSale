import React, { useState } from "react";
import TaxMasterIcon from "../../assets/TaxMaster/TaxMasterIcon.png";
import TaxAddNew from "./TaxAddNew";
import { useTax } from "../../context/TaxContext";
const Tax: React.FC = () => {

  const { addTax } = useTax();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to add new data
  const handleAddNew = (newItem: any) => {
    addTax(newItem);
  };

  return (
    <>
      <div className={`mx-4 my-7 ${isModalOpen ? `blur-sm` : ``}`}>
        <h1 className="font-inter text-[18px] font-medium leading-[21.78px] text-left">
          Tax Master
        </h1>
      </div>

      <div
        className={`mx-4 my-7 flex justify-center items-center ${
          isModalOpen ? `blur-md` : ``
        }`}
      >
        <div className="flex w-full justify-center items-center h-screen flex-wrap rounded-md border border-gray-200">
          <div className="flex flex-col justify-center items-center gap-4">
            <div>
              <img src={TaxMasterIcon} alt="Tax Master Icon" />
            </div>
            <div>
              <p className="font-inter text-[14px] leading-[16.94px] font-light text-center text-[#656565]">
                Lorem ipsum dolor sit amet consectetur. In blandit morbi sit
                turpis sit libero elit. Aliquam sed donec mattis cursus aliquet
                sed. Senectus id.
              </p>
            </div>
            <div>
              <button
                className="px-4 py-2 rounded-md bg-[#25add7] text-white hover:shadow-xl"
                onClick={handleModalOpen}
              >
                Add New
              </button>
            </div>
          </div>
        </div>
      </div>
       
      {isModalOpen && (
        <TaxAddNew
          open={isModalOpen}
          onClose={handleModalOpen}
          onSave={handleAddNew}
        />
      )}
    </>
  );
};

export default Tax;
