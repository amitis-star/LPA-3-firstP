import React from "react";
import "../../../assets/style/index.css";
import GreenCircleIcon from "../../../assets/icons/greenCiclre";

const Section3 = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 px-7">
        <div className="rounded-lg shadow-[0_2px_8px_0_rgb(33,36,39,0.12)] px-4 py-3.5">
          <div className="flex justify-start gap-2 items-center mb-3.5">
            <GreenCircleIcon />
            <p className="text-16 font-700">Items needed on test day</p>
          </div>
          <div className="h-0.1 bg-gray-line mb-2.5"></div>
          <div className="h-[163px] mb-4">
            <p className="w-[328px]">
              Dear visitors, please bring the following items:
            </p>
          </div>
          <div className="flex">
            <button className="py-1.7 bg-green-1986 text-16 font-700 text-center text-white px-5 rounded-lg">
              Read More
            </button>
            <span className="my-2.5 mx-auto text-14 font-300 text-gray-100">
              11 May 2025
            </span>
          </div>
        </div>
        <div className="rounded-lg shadow-[0_2px_8px_0_rgb(33,36,39,0.12)] px-4 py-3.5">
          <div className="flex justify-start gap-2 items-center mb-3.5">
            <GreenCircleIcon />
            <p className="text-16 font-700">
              Announcement regarding the last exam date
            </p>
          </div>
          <div className="h-0.1 bg-gray-line mb-2.5"></div>
          <div className="h-[163px] mb-4">
            <p className="w-[328px]">
              It is hereby announced that the last day of the Aviation Language
              Exam is March 18 of this year. The Language Center will resume
              operations on April 20, 1402.
            </p>
          </div>
          <div className="flex">
            <button className="py-1.7 bg-green-1986 text-16 font-700 text-center text-white px-5 rounded-lg">
              Read More
            </button>
            <span className="my-2.5 mx-auto text-14 font-300 text-gray-100">
              17 April 2024
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section3;
