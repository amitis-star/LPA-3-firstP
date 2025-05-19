// import React, { useState } from "react";
// import "../../../assets/style/index.css";
// import GenderDropdown from "./GenderDropdown";
// import EmailInput from "./EmailInput";

// type BaseInputProps = {
//   name: string;
//   placeholder: string;
//   dir?: "ltr" | "rtl";
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   inputMode?: "numeric" | "text";
//   type?: string;
// };

// const BaseInput = ({
//   name,
//   placeholder,
//   dir = "ltr",
//   value,
//   onChange,
//   inputMode = "text",
//   type = "text",
// }: BaseInputProps) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const isActive = isFocused || value !== "";

//   return (
//     <div className="relative w-full">
//       <label
//         htmlFor={name}
//         className={`
//           absolute transition-all duration-200
//   ${
//     dir === "rtl"
//       ? isActive
//         ? "right-6"
//         : "right-4"
//       : isActive
//       ? "left-6"
//       : "left-4"
//   }
//   ${isActive ? "-top-2.5 text-black text-12" : "top-2.5 text-gray-400 text-sm"}
//   bg-white z-10 px-1
//         `}
//       >
//         {placeholder}
//       </label>
//       <input
//         id={name}
//         name={name}
//         className={`outline-none w-full h-12 px-4 bg-transparent rounded-lg hadow-[0_1px_4px_0_rgb(33,36,39,0.04)] border transition-all duration-200 ${
//           isActive ? "border-black" : " border-gray-300"
//         }`}
//         dir={dir}
//         type={type}
//         value={value}
//         onChange={onChange}
//         inputMode={inputMode}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//       />
//     </div>
//   );
// };

// const Section4p2 = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     persianLastName: "",
//     persianFirstName: " ",
//     idNumber: "",
//     nationality: "",
//     postalCode: "",
//     phoneValue: "",
//     email: "",
//     gender: "",
//   });
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     let { name, value } = e.target;
//     if (name === " idNumber" || name === "phoneValue") {
//       value = value.replace(/\D/g, "");
//     }
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };
//   return (
//     <form>
//       <div className="flex justify-center items-start mb-10">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
//           <BaseInput
//             name="firstName"
//             placeholder="first name"
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//           <BaseInput
//             name="lastname"
//             placeholder="last name"
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//           <BaseInput
//             name="persian last name"
//             placeholder="persian last name"
//             dir="rtl"
//             value={formData.persianLastName}
//             onChange={handleChange}
//           />
//           <BaseInput
//           name="persian first name"
//           placeholder="persian first name"
//           dir="rtl"
//           value={formData.persianFirstName}
//           onChange={handleChange}
//           />
//           <GenderDropdown
//           value={formData.gender}
          
//           />

//         </div>
//       </div>
//     </form>
//   );
// };
