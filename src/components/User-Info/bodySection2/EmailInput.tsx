import React, { useState } from "react";

type EmailInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
};

const EmailInput = ({ value, onChange, onBlur, error }: EmailInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
  const isValid = value === "" || emailPattern.test(value);
  const isActive = isFocused || value !== "";

  return (
    <div className="relative w-full">
      <label
        htmlFor="email"
        className={`absolute transition-all duration-200 bg-white z-10
        ${
          isActive
            ? "left-6 -top-2.5 text-12 text-black"
            : "left-5 top-2.5 text-14 text-gray-400"
        }
      `}
      >
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        value={value}
        onChange={onChange}
        onBlur={(e) => {
          setIsFocused(false);
          if (onBlur) onBlur(e);
        }}
        onFocus={() => setIsFocused(true)}
        className={`w-full h-12 px-4 bg-transparent outline-none rounded-lg
        shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] transition-all duration-200
        border ${
          error || !isValid
            ? "border-red-500"
            : isActive
            ? "border-black"
            : "border-gray-300"
        }
      `}
      />
      {(error || !isValid) && (
        <p className="text-red-500 text-xs mt-1">Please enter a valid email.</p>
      )}
    </div>
  );
};

export default EmailInput;
