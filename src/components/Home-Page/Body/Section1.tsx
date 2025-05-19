import React from "react";
import "../../../assets/style/index.css";
import IntroductionOfTheTest from "../../../assets/icons/introductionOfTheTest";
import ExamRegistration from "../../../assets/icons/examRegitstration";
import CommonQuestions from "../../../assets/icons/commonQuestions";
import ExamRegulation from "../../../assets/icons/examRegulation";
import NoticeIcon from "../../../assets/icons/notices";
import LocationIcon from "../../../assets/icons/location";

const Section1 = () => {
  const firstRowItems = [
    { icon: <IntroductionOfTheTest />, label: "Sign Up" },
    { icon: <ExamRegistration />, label: "Introduction" },
    { icon: <CommonQuestions />, label: "Q & A" },
    { icon: <NoticeIcon />, label: "Announce" },
    { icon: <LocationIcon />, label: "Address" },
    { icon: <ExamRegulation />, label: "Regulations" },
    { icon: <IntroductionOfTheTest />, label: "Introduction" },
    { icon: <ExamRegistration />, label: "Sign UP" },
  ];

  return (
    <div className="mt-16">
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 p-7">
        <div className="grid grid-cols-4  md:grid-cols-8 gap-6">
          {firstRowItems.map((item, index) => (
            <div
              key={index}
              className="w-18 h-23 flex flex-col items-center gap-1 cursor-pointer"
            >
              <div className="w-18 h-18 flex justify-center items-center rounded-lg shadow-[0_2px_8px_0_rgb(33,36,39,0.12)]">
                {item.icon}
              </div>
              <span className="h-4 text-center text-10 font-400">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;
