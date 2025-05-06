import React from "react";
import "../../../assets/style/index.css";
import GenderDropdown from "./GenderDropdown";
import EmailInput from "./EmailInput";
import PhoneNumberInput from "./PhoneNumberInput";
import NumericInput from "./NumericInput";

const Section4p2 = () => {
  return (
    <>
      <div className="flex justify-center items-start mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
          <div className="w-full h-12 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] px-4 py-[13px] border border-gray-300">
            <input
              className="outline-none w-full"
              placeholder="First Name"
              type="text"
            />
          </div>

          <div className="w-full h-12 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] px-4 py-[13px] border border-gray-300">
            <input
              className="outline-none w-full"
              placeholder="Last Name"
              type="text"
            />
          </div>
          <div className="w-full h-12 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] px-4 py-[13px] border border-gray-300">
            <input
              dir="rtl"
              className="outline-none w-full"
              placeholder="نام خانوادگی (Persian Last Name)"
              type="text"
            />
          </div>
          <div className="w-full h-12 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] px-4 py-[13px] border border-gray-300">
            <input
              dir="rtl"
              className="outline-none w-full"
              placeholder="نام (Persian First Name)"
              type="text"
            />
          </div>

          <GenderDropdown />

          <NumericInput />

          <div className="w-full h-12 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] px-4 py-[13px] border border-gray-300">
            <input
              className="outline-none w-full"
              placeholder="Nationality"
              type="text"
            />
          </div>

          <div className="w-full h-12 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] px-4 py-[13px] border border-gray-300">
            <input
              className="outline-none w-full"
              placeholder="Postal Code"
              type="text"
            />
          </div>

          <EmailInput />

          <div className="w-full h-12 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] px-4 py-[13px] border border-gray-300">
            <input
              className="outline-none w-full"
              placeholder="Mother Tongue"
              type="text"
            />
          </div>

          <PhoneNumberInput />
        </div>
      </div>
    </>
  );
};

export default Section4p2;
