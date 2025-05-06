import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/style/index.css";
import Hamburger from "../../assets/icons/hamburgerMenu";
import Profile from "../../assets/icons/profile";
import IntroductionOfTheTest from "../../assets/icons/introductionOfTheTest";
import ExamRegistration from "../../assets/icons/examRegitstration";
import CommonQuestions from "../../assets/icons/commonQuestions";
import ExamRegulation from "../../assets/icons/examRegulation";
import NoticeIcon from "../../assets/icons/notices";
import LocationIcon from "../../assets/icons/location";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-70 z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          <div
            className={`
    fixed z-50 bg-white p-6
    w-[820px] lg:w-[436px] lg:h-screen
    bottom-0 lg:top-0
    left-1/2 lg:left-0
    transform -translate-x-1/2 lg:translate-x-0
    sm:h-[560px]  
    md:h-[720px]  
    ${isMenuOpen ? "md:delay-0 delay-300" : ""}
  `}
          >
            <div className="sm:hidden w-[200px] h-[8px] bg-green-500 absolute top-0 left-1/2 transform -translate-x-1/2 rounded-lg"></div>

            <button
              className="text-32 font-bold text-gray-700 absolute top-4 right-4 md:right-16"
              onClick={() => setIsMenuOpen(false)}
            >
              &times;
            </button>

            <div className="flex flex-col items-center justify-start gap-4 h-full pt-16">
              <Link to="/SecondPage">
                <div className="w-46 h-14 bg-green-1986 text-white rounded-lg flex items-center px-4 gap-7 shadow-[0_2px_8px_0_rgb(33,36,39,0.12)] cursor-pointer">
                  <ExamRegistration className="w-8 h-8 text-white" />
                  <p className="text-18 font-700">User Info</p>
                </div>
              </Link>
              <Link to="/ThirdPage">
                <div className="w-46 h-14 bg-green-1986 text-white rounded-lg flex items-center px-4 gap-7 shadow-[0_2px_8px_0_rgb(33,36,39,0.12)]">
                  <IntroductionOfTheTest className="w-8 h-8 text-white" />
                  <p className="text-18 font-700">User Job</p>
                </div>
              </Link>
              <div className="w-46 h-14 bg-green-1986 text-white rounded-lg flex items-center px-4 gap-7 shadow-[0_2px_8px_0_rgb(33,36,39,0.12)]">
                <ExamRegulation className="w-8 h-8" />
                <p className="text-18 font-700">Exam Regulation</p>
              </div>
              <div className="w-46 h-14 bg-green-1986 text-white rounded-lg flex items-center px-4 gap-7 shadow-[0_2px_8px_0_rgb(33,36,39,0.12)]">
                <CommonQuestions className="w-8 h-8" />
                <p className="text-18 font-700">Common Questions</p>
              </div>
              <div className="w-46 h-14 bg-green-1986 text-white rounded-lg flex items-center px-4 gap-7 shadow-[0_2px_8px_0_rgb(33,36,39,0.12)]">
                <NoticeIcon className="w-8 h-8" />
                <p className="text-18 font-700">Notices</p>
              </div>
              <div className="w-46 h-14 bg-green-1986 text-white rounded-lg flex items-center px-4 gap-7 shadow-[0_2px_8px_0_rgb(33,36,39,0.12)]">
                <LocationIcon className="w-8 h-8" fill="white" />
                <p className="text-18 font-700">Location</p>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="bg-green-1986 p-3 h-14 rounded-lg flex justify-between gap-2.5 m-4 mb-8 shadow-[0_8px_12px_0_rgba(33,36,39,0.12)]">
        <div className="flex gap-4">
          <button onClick={() => setIsMenuOpen(true)}>
            <Hamburger className="text-white" />
          </button>
          <span className="w-8 h-8 bg-1986-Shade-2 rounded-1 text-center flex justify-center items-center border border-solid border-1986-Tint-2 text-white rounded-md">
            FA
          </span>
        </div>
        <Link to="/">
          <span className="text-18 font-700 text-white">LPA</span>
        </Link>
        <div className="bg-white rounded-1 flex justify-center items-center w-8 h-8 rounded-md cursor-pointer">
          <Profile />
        </div>
      </div>
    </>
  );
};

export default Header;
