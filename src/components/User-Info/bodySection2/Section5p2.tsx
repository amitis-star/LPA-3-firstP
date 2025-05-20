import React from "react";

type Section5p2Props = {
  onReturn: () => void;
  onSubmit: () => void;
};

const Section5p2 = ({ onReturn, onSubmit }: Section5p2Props) => {
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
      <div className="mt-8 flex justify-center items-center gap-6 w-full">
        <button
          onClick={onReturn}
          type="button"
          className="w-full sm:w-1/4 h-12 bg-white rounded-lg border text-center text-18 font-400 shadow-[0_2px_8px_0_rgb(33,36,39,0.12)] text-gray-400"
        >
          Return
        </button>
        <button
          onClick={onSubmit}
          type="button"
          className="w-full sm:w-3/4 h-12 bg-green-1986 rounded-lg border text-center text-white text-18 font-400 shadow-[0_2px_8px_0_rgb(33,36,39,0.12)]"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Section5p2;
