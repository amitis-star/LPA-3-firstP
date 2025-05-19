import React from "react";
import "../../../assets/style/index.css";
import GreenCircleIcon from "../../../assets/icons/greenCiclre";

interface TextCardProps {
  title: string;
  description: string;
  date: string;
}

const TextCard: React.FC<TextCardProps> = ({ title, description, date }) => {
  return (
    <div className="w-full max-w-[360px] rounded-lg shadow-[0_2px_8px_0_rgb(33,36,39,0.12)] px-3 py-3.5 mx-auto h-[298px] flex flex-col justify-between">
      <div >
        <div className="flex justify-start gap-3  items-center mb-3.5 border-b-gray-line border-b-2 pb-2">
        <GreenCircleIcon />
        <p className="text-16 font-700">{title}</p>
      </div>
      <div className=" mb-4">
        <p className="">{description}</p>
      </div>
      </div>
      <div className="flex">
        <span className="my-2.5 mx-auto text-14 font-300 text-gray-100">
          {date}
        </span>
        <button className="py-1.7 bg-green-1986 text-16 font-700 text-center text-white px-5 rounded-lg">
          View More
        </button>
      </div>
    </div>
  );
};

export default TextCard;
