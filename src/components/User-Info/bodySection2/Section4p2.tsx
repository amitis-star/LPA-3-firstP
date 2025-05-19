import React, { useState } from "react";
import "../../../assets/style/index.css";
import GenderDropdown from "./GenderDropdown";
import EmailInput from "./EmailInput";

type BaseInputProps = {
  name: string;
  placeholder: string;
  dir?: "ltr" | "rtl";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputMode?: "numeric" | "text";
  type?: string;
};

const BaseInput = ({
  name,
  placeholder,
  dir = "ltr",
  value,
  onChange,
  inputMode = "text",
  type = "text",
}: BaseInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value !== "";

  return (
    <div className="relative w-full">
      <label
        htmlFor={name}
        className={`
          absolute transition-all duration-200
  ${
    dir === "rtl"
      ? isActive
        ? "right-6"
        : "right-4"
      : isActive
      ? "left-6"
      : "left-4"
  }
  ${isActive ? "-top-2.5 text-black text-12" : "top-2.5 text-gray-400 text-sm"}
  bg-white z-10 px-1
        `}
      >
        {placeholder}
      </label>
      <input
        id={name}
        name={name}
        className={`
          outline-none w-full h-12 px-4 bg-transparent
          rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)]
          border transition-all duration-200
          ${isActive ? "border-black" : "border-gray-300"}
        `}
        dir={dir}
        type={type}
        value={value}
        onChange={onChange}
        inputMode={inputMode}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

const Section4p2 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    persianLastName: "",
    persianFirstName: "",
    idNumber: "",
    nationality: "",
    postalCode: "",
    phoneValue: "",
    email: "",
    gender: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let { name, value } = e.target;

    if (name === "idNumber" || name === "phoneValue") {
      value = value.replace(/\D/g, ""); // allow only digits
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form>
      <div className="flex justify-center items-start mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <BaseInput
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <BaseInput
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <BaseInput
            name="persianLastName"
            placeholder="نام خانوادگی (Persian Last Name)"
            dir="rtl"
            value={formData.persianLastName}
            onChange={handleChange}
          />
          <BaseInput
            name="persianFirstName"
            placeholder="نام (Persian First Name)"
            dir="rtl"
            value={formData.persianFirstName}
            onChange={handleChange}
          />
          <GenderDropdown
            value={formData.gender}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, gender: value }))
            }
          />
          <BaseInput
            name="idNumber"
            placeholder="ID Number (10 digits)"
            value={formData.idNumber}
            onChange={handleChange}
            inputMode="numeric"
          />
          <BaseInput
            name="nationality"
            placeholder="Nationality"
            value={formData.nationality}
            onChange={handleChange}
          />
          <BaseInput
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
          />
          <EmailInput value={formData.email} onChange={handleChange} />
          <BaseInput
            name="phoneValue"
            placeholder="Phone Number (11 digits)"
            value={formData.phoneValue}
            onChange={handleChange}
            inputMode="numeric"
          />
        </div>
      </div>
    </form>
  );
};

export default Section4p2;
