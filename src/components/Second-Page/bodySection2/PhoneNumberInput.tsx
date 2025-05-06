import React, { useState } from "react";
import "../../../assets/style/index.css";

const PhoneNumberInput = () => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (/^\d{0,11}$/.test(input)) {
      setValue(input);
    }
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  const showError = isTouched && value.length > 0 && value.length < 11;

  return (
    <div
      className={`w-full h-12 rounded-lg px-4 py-[13px] shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] transition-all duration-200 ${
        showError ? "border border-red-500" : "border border-gray-300"
      }`}
    >
      <input
        className="outline-none w-full h-full"
        placeholder="Phone Number (11 Numbers)"
        type="text"
        value={value}
        inputMode="numeric"
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default PhoneNumberInput;
