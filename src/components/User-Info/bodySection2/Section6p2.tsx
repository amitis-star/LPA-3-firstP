import React from "react";
import "../../../assets/style/index.css";
import { Link } from "react-router-dom";

const Section6p2 = () => {
  return (
    <>
      <div className="mt-8 flex justify-center items-center gap-6 w-full">
        <Link to="/" className="w-full sm:w-1/4">
          <button className="w-full h-12 bg-white rounded-lg border text-center text-18 font-400 shadow-[0_2px_8px_0_rgb(33,36,39,0.12)] text-gray-400">
            Return
          </button>
        </Link>
        <Link to="/ThirdPage" className="w-full sm:w-3/4">
          <button className="w-full h-12 bg-green-1986 rounded-lg border text-center text-white text-18 font-400 shadow-[0_2px_8px_0_rgb(33,36,39,0.12)]">
            Next
          </button>
        </Link>
      </div>
    </>
  );
};

export default Section6p2;
