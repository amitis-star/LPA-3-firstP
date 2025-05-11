import React from "react";
import "../../../assets/style/index.css";
import IntroductionOfTheTest from "../../../assets/icons/introductionOfTheTest";
import ExamRegistration from "../../../assets/icons/examRegitstration";
import CommonQuestions from "../../../assets/icons/commonQuestions";
import ExamRegulation from "../../../assets/icons/examRegulation";
import NoticeIcon from "../../../assets/icons/notices";
import LocationIcon from "../../../assets/icons/location";

const Section1 = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 p-7">
        <div className="grid grid-cols-4 gap-6">
          <div className="w-18 h-23 flex flex-col items-center gap-1 cursor-pointer">
            <div className="w-18 h-18 flex justify-center items-center rounded-lg shadow-[0_2px_8px_0_rgb(33,36,39,0.12)]">
              <IntroductionOfTheTest />
            </div>
            <span className="h-4 text-center text-10 font-400">
              Sign Up
            </span>
          </div>

          <div className="w-18 h-23 flex flex-col items-center gap-1 cursor-pointer">
            <div className="w-18 h-18 flex justify-center items-center rounded-lg shadow-[0_2px_8px_0_rgb(33,36,39,0.12)]">
              <ExamRegistration />
            </div>
            <span className="h-4 text-center text-10 font-400">
              Introduction
            </span>
          </div>

          <div className="w-18 h-23 flex flex-col items-center gap-1 cursor-pointer">
            <div className="w-18 h-18 flex justify-center items-center rounded-lg shadow-[0_2px_8px_0_rgb(33,36,39,0.12)]">
              <CommonQuestions />
            </div>
            <span className="h-4 text-center text-10 font-400">
              Q & A
            </span>
          </div>

          <div className="w-18 h-23 flex flex-col items-center gap-1 cursor-pointer">
            <div className="w-18 h-18 flex justify-center items-center rounded-lg shadow-[0_2px_8px_0_rgb(33,36,39,0.12)]">
              <NoticeIcon />
            </div>
            <span className="h-4 text-center text-10 font-400">Announce</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className="w-18 h-23 flex flex-col items-center gap-1 cursor-pointer">
            <div className="w-18 h-18 flex justify-center items-center rounded-lg shadow-[0_2px_8px_0_rgb(33,36,39,0.12)]">
              <LocationIcon />
            </div>
            <span className="h-4 text-center text-10 font-400">Address</span>
          </div>

          <div className="w-18 h-23 flex flex-col items-center gap-1 cursor-pointer">
            <div className="w-18 h-18 flex justify-center items-center rounded-lg shadow-[0_2px_8px_0_rgb(33,36,39,0.12)]">
              <ExamRegulation />
            </div>
            <span className="h-4 text-center text-10 font-400">
              Regulations
            </span>
          </div>

          <div className="w-18 h-23 flex flex-col items-center gap-1 cursor-pointer">
            <div className="w-18 h-18 flex justify-center items-center rounded-lg shadow-[0_2px_8px_0_rgb(33,36,39,0.12)]">
              <IntroductionOfTheTest />
            </div>
            <span className="h-4 text-center text-10 font-400">
              Introduction
            </span>
          </div>

          <div className="w-18 h-23 flex flex-col items-center gap-1 cursor-pointer">
            <div className="w-18 h-18 flex justify-center items-center rounded-lg shadow-[0_2px_8px_0_rgb(33,36,39,0.12)]">
              <ExamRegistration />
            </div>
            <span className="h-4 text-center text-10 font-400">
              Sign UP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
