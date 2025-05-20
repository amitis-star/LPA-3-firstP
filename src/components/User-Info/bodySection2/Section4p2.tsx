import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../../assets/style/index.css";
import GenderDropdown from "./GenderDropdown";
import EmailInput from "./EmailInput";
import BaseInput from "./BaseInput";
import Section5p2 from "./Section5p2";

const Section4p2 = ({
  onReturn,
  onSubmit,
}: {
  onReturn: () => void;
  onSubmit: () => void;
}) => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    persianLastName: Yup.string().required("Persian Last Name is required"),
    persianFirstName: Yup.string().required("Persian First Name is required"),
    idNumber: Yup.string()
      .matches(/^\d{10}$/, "ID Number must be exactly 10 digits")
      .required("ID Number is required"),
    nationality: Yup.string().required("Nationality is required"),
    postalCode: Yup.string().required("Postal Code is required"),
    phoneValue: Yup.string()
      .matches(/^\d{11}$/, "Phone Number must be exactly 11 digits")
      .required("Phone Number is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    gender: Yup.string().required("Gender is required"),
  });

  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit();
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let { name, value } = e.target;
    if (name === "idNumber" || name === "phoneValue") {
      value = value.replace(/\D/g, "");
    }
    formik.setFieldValue(name, value);
  };
  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <div className="flex justify-center items-start mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full my-auto">
          <BaseInput
            name="firstName"
            placeholder="First Name"
            value={formik.values.firstName}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName ? formik.errors.firstName : ""}
          />
          <BaseInput
            name="lastName"
            placeholder="Last Name"
            value={formik.values.lastName}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName ? formik.errors.lastName : ""}
          />
          <BaseInput
            name="persianLastName"
            placeholder="نام خانوادگی (Persian Last Name)"
            dir="rtl"
            value={formik.values.persianLastName}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.persianLastName
                ? formik.errors.persianLastName
                : ""
            }
          />
          <BaseInput
            name="persianFirstName"
            placeholder="نام (Persian First Name)"
            dir="rtl"
            value={formik.values.persianFirstName}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.persianFirstName
                ? formik.errors.persianFirstName
                : ""
            }
          />
          <GenderDropdown
            value={formik.values.gender}
            onChange={(val) => formik.setFieldValue("gender", val)}
            onBlur={() => formik.setFieldTouched("gender", true)}
            error={
              formik.touched.gender && formik.errors.gender
                ? formik.errors.gender
                : undefined
            }
          />

          <BaseInput
            name="idNumber"
            placeholder="ID Number (10 digits)"
            value={formik.values.idNumber}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.idNumber ? formik.errors.idNumber : ""}
            inputMode="numeric"
          />
          <BaseInput
            name="nationality"
            placeholder="Nationality"
            value={formik.values.nationality}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.nationality ? formik.errors.nationality : ""}
          />
          <BaseInput
            name="postalCode"
            placeholder="Postal Code"
            value={formik.values.postalCode}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.postalCode ? formik.errors.postalCode : ""}
          />
          <EmailInput
            value={formik.values.email}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email ? formik.errors.email : ""}
          />
          <BaseInput
            name="phoneValue"
            placeholder="Phone Number (11 digits)"
            value={formik.values.phoneValue}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phoneValue ? formik.errors.phoneValue : ""}
            inputMode="numeric"
          />
        </div>
      </div>
      <Section5p2 onReturn={onReturn} onSubmit={formik.handleSubmit} />
    </form>
  );
};

export default Section4p2;
