import React from "react";
import "../../../assets/style/index.css";
import Step2of8 from "../../../assets/icons/Step2-8";

const Section1p3 = () => {
  return (
    <>
      <div className=" h-16">
        <div className="flex justify-start items-center gap-4">
          <div className="relative w-16 h-16">
            <Step2of8/>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-18 font-700 text-gray-900">2/8</p>
            </div>
          </div>
          <div>
            <p className="text-12 font-400 text-gray-400">
              Completion of personal information
            </p>
            <p className=" text-14 font-400 text-gray-800">
              Completing job information
            </p>
            <p className="text-12 font-400 text-gray-400">
              Completion of educational information
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1p3;
