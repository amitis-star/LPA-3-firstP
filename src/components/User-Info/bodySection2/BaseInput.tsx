import React, { useState } from "react";

interface BaseInputProps {
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  dir?: "ltr" | "rtl";
  inputMode?: "text" | "numeric" | "decimal" | "tel" | "email" | "url";
}

const BaseInput: React.FC<BaseInputProps> = ({
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  dir = "ltr",
  inputMode = "text",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.length > 0;

  return (
    <div className="relative w-full">
      <label
        htmlFor={name}
        className={`
    absolute px-1 select-none cursor-text
    transition-all duration-200 ease-in-out
    ${dir === "rtl" ? "right-4" : "left-4"}
    ${
      isActive ? "-top-2.5 text-12 text-black" : "top-2.5 text-14 text-gray-400"
    }
    bg-white z-10
  `}
      >
        {placeholder}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        dir={dir}
        value={value}
        onChange={onChange}
        onBlur={(e) => {
          setIsFocused(false);
          if (onBlur) onBlur(e);
        }}
        onFocus={() => setIsFocused(true)}
        inputMode={inputMode}
        className={`
    w-full h-12 px-4 py-[13px] bg-transparent outline-none rounded-lg
    shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] transition-all duration-200
    border ${
      error ? "border-red-500" : isActive ? "border-black" : "border-gray-300"
    }
    ${dir === "rtl" ? "text-right" : ""}
  `}
      />

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default BaseInput;
