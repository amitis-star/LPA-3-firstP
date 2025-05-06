import React, { useState, useRef, useEffect } from "react";
import Down from "../../../assets/icons/down";
import "../../../assets/style/index.css";

const JobTitleDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const jobTitles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Product Manager",
    "Data Analyst",
    "DevOps Engineer",
    "QA Tester",
    "Mobile Developer",
    "HR Specialist",
    "Technical Writer",
    "Project Coordinator",
    "Security Analyst",
    "IT Support",
    "Business Analyst"
  ];

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        onClick={toggleDropdown}
        className="w-full h-12 rounded-lg px-4 py-[13px] border border-gray-300 shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] flex justify-between items-center cursor-pointer text-gray-700"
      >
        <span className={selected ? "text-gray-900" : "text-gray-400"}>
          {selected || "Job Title"}
        </span>
        <Down className="ml-2 text-gray-400" />
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] max-h-40 overflow-y-auto">
          {jobTitles.map((title) => (
            <div
              key={title}
              onClick={() => handleSelect(title)}
              className="w-full px-4 py-1.5 cursor-pointer transition-colors"
            >
              <div className="w-full px-2 py-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-300">
                {title}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobTitleDropdown;
