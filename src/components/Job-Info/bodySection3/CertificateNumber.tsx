import React, { useState } from "react";

const CertificateNumber = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    setValue(numericValue);
  };

  return (
    <div className="w-full h-12 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] px-4 py-[13px] border border-gray-300">
      <input
        className="outline-none w-full"
        placeholder="Certificate Number"
        type="text"
        value={value}
        onChange={handleChange}
        inputMode="numeric"
      />
    </div>
  );
};

export default CertificateNumber;
