import React from "react";
import "../../../assets/style/index.css";
import Step1of8 from "../../../assets/icons/Step1-8";

const Section2p2 = () => {
  return (
    <>
      <div className=" h-16">
        <div className="flex justify-start items-center gap-4">
          <div className="relative w-16 h-16">
            <Step1of8 />
            <span className="absolute inset-00 flex items-center justify-center">
              <p className="text-18 font-700 text-gray-900">1/8</p>
            </span>
          </div>
          <div>
            <p className="text-14 font-400 text-gray-800">
              Completion of personal information
            </p>
            <p className="text-12 font-400 text-gray-400">
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

export default Section2p2;
