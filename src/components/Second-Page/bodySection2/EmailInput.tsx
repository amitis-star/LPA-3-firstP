import React, { useState } from "react";
import "../../../assets/style/index.css";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    if (value === "") {
      setIsValid(true);
    } else {
      setIsValid(emailPattern.test(value));
    }
  };

  return (
    <div
      className={`w-full h-12 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] px-4 py-[13px] border ${
        !isValid ? "border-red-500" : "border-gray-300"
      }`}
    >
      <input
        className="outline-none w-full"
        placeholder="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
    </div>
  );
};

export default EmailInput;
