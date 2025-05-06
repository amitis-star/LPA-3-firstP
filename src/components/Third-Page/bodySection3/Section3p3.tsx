import React from "react";
import "../../../assets/style/index.css";
import PlusIcon from "../../../assets/icons/plus";
import DeleteIcon from "../../../assets/icons/delete";

const Section3p3 = () => {
  return (
    <>
      <div className="flex justify-center items-start mb-10 mt-16 flex-col gap-8">
        <div className="w-full flex justify-between items-center">
          <span className="text-16 font-700 text-gray-800">Career records</span>
          <div className="w-6 h-6 bg-green-1986 rounded-sm flex justify-center items-center">
            <PlusIcon className="text-white" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full ">
          <div className="w-full h-12 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] px-4 py-[13px] border border-gray-300">
            <input
              className="outline-none w-full"
              placeholder="Name of the organization"
              type="text"
            />
          </div>

          <div className="w-full h-12 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] px-4 py-[13px] border border-gray-300">
            <input
              className="outline-none w-full"
              placeholder="Job Position"
              type="text"
            />
          </div>

          <div className="w-full h-12 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] px-4 py-[13px] border border-gray-300">
            <input
              className="outline-none w-full"
              placeholder="Duration of service"
              type="text"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-start mb-10 mt-16 flex-col gap-8">
        <div className="w-full flex justify-between items-center">
          <span className="text-16 font-700 text-gray-800">
            Career records (2)
          </span>
          <div className="flex justify-center items-center gap-2">
            <div className="w-6 h-6 bg-green-1986 rounded-sm flex justify-center items-center shadow-[0_2px_8px_0_rgb(33,36,39,0.12)]">
              <PlusIcon className="text-white" />
            </div>
            <div className="w-6 h-6 bg-rose-faux rounded-sm flex justify-center items-center shadow-[0_2px_8px_0_rgb(33,36,39,0.12)]">
              <DeleteIcon />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full ">
          <div className="w-full h-12 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] px-4 py-[13px] border border-gray-300">
            <input
              className="outline-none w-full"
              placeholder="Name of the organization"
              type="text"
            />
          </div>

          <div className="w-full h-12 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] px-4 py-[13px] border border-gray-300">
            <input
              className="outline-none w-full"
              placeholder="Job Position"
              type="text"
            />
          </div>

          <div className="w-full h-12 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] px-4 py-[13px] border border-gray-300">
            <input
              className="outline-none w-full"
              placeholder="Duration of service"
              type="text"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3p3;
