import React from "react";
import "../../../assets/style/index.css";

const Section5p2 = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full">
          <p className="text-16 font-700 text-gray-800 mb-8">Work Experience</p>
          <div className="h-20 w-full py-[13px] px-4 border border-gray-300 rounded-lg">
            <input
              type="text"
              className="outline-none w-full h-full"
              placeholder="Explanations"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5p2;
