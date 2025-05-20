import React, { useState, useRef, useEffect } from "react";
import Down from "../../../assets/icons/down";
import "../../../assets/style/index.css";

type GenderDropdownProps = {
  value: string;
  onChange: (value: string) => void;
  error?: string | false | undefined;
  onBlur?: () => void;
};

const GenderDropdown = ({
  value,
  onChange,
  error,
  onBlur,
}: GenderDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = isOpen || value !== "";

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    setHasInteracted(true);
  };
  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
    if (onBlur) onBlur();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (isOpen) {
          setIsOpen(false);
          if (hasInteracted && onBlur) {
            onBlur();
          }
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, hasInteracted, onBlur]);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label
        htmlFor="gender"
        className={`
          absolute transition-all duration-200 bg-white z-10
          ${
            isActive
              ? "left-6 -top-2.5 text-12 text-black"
              : "left-5 top-2.5 text-14 text-gray-400"
          }
        `}
      >
        Gender
      </label>
      <div
        onClick={toggleDropdown}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleDropdown();
          }
        }}
        className={`
          w-full h-12 px-4 py-[13px] rounded-lg cursor-pointer flex items-center justify-between
          shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] transition-all duration-200
          border ${
            error
              ? "border-red-500"
              : isActive
              ? "border-black"
              : "border-gray-300"
          }
          bg-white
        `}
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {value || ""}
        </span>
        <Down className="ml-2 text-gray-400" />
      </div>
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)]">
          {["Male", "Female", "Other"].map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="w-full px-4 py-1.5 cursor-pointer transition-colors"
            >
              <div className="w-full px-2 py-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-300">
                {option}
              </div>
            </div>
          ))}
        </div>
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default GenderDropdown;
