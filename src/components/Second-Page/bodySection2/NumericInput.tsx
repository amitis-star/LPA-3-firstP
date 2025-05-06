import React, { useState } from "react";

const NumericInput = ({ placeholder }: { placeholder?: string }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, ""); 
    if (numericValue.length <= 10) {
      setValue(numericValue);
    }
  };

  return (
    <div className="w-full h-12 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] px-4 py-[13px] border border-gray-300">
      <input
        type="text"
        inputMode="numeric"
        value={value}
        onChange={handleChange}
        placeholder={placeholder || "ID Numer (10 Numbers)"}
        className="outline-none w-full"
      />
    </div>
  );
};

export default NumericInput;
