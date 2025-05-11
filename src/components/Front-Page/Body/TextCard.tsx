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
    <div className="rounded-lg shadow-[0_2px_8px_0_rgb(33,36,39,0.12)] px-4 py-3.5">
      <div className="flex justify-start gap-2 items-center mb-3.5">
        <GreenCircleIcon />
        <p className="text-16 font-700">{title}</p>
      </div>
      <div className="h-0.1 bg-gray-line mb-2.5"></div>
      <div className="h-[163px] mb-4">
        <p className="w-[328px]">{description}</p>
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
