import React, { useState } from "react";
import "../../../assets/style/index.css";
import PlusIcon from "../../../assets/icons/plus";
import JobTitleDropdown from "./JobTItleDropdown";
import DeleteIcon from "../../../assets/icons/delete";
import DatePicker from "./DatePicker";

const Section2p3 = () => {
  const [jobSections, setJobSections] = useState([{ id: Date.now().toString() }]);

  const [dates, setDates] = useState<{
    [key: string]: { issuedDate?: Date; validityDate?: Date };
  }>({});

  const [certificateNumbers, setCertificateNumbers] = useState<{
    [key: string]: string;
  }>({});

  const addJobSection = () => {
    const newId = Date.now().toString();
    setJobSections((prev) => [...prev, { id: newId }]);
  };

  const deleteJobSection = (id: string) => {
    setJobSections((prev) => prev.filter((section) => section.id !== id));
    setDates((prevDates) => {
      const newDates = { ...prevDates };
      delete newDates[id];
      return newDates;
    });
    setCertificateNumbers((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const handleDateChange = (
    id: string,
    type: "issuedDate" | "validityDate",
    date: Date | undefined
  ) => {
    setDates((prevDates) => ({
      ...prevDates,
      [id]: {
        ...prevDates[id],
        [type]: date,
      },
    }));
  };

  const handleCertificateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    setCertificateNumbers((prev) => ({
      ...prev,
      [id]: numericValue,
    }));
  };

  return (
    <>
      {jobSections.map((section, index) => (
        <div
          key={section.id}
          className="flex justify-center items-start mb-10 mt-16 flex-col gap-8"
        >
          <div className="w-full flex justify-between items-center">
            <span className="text-16 font-700 text-gray-800">
              {index === 0
                ? "Job Information"
                : `Job Information (${index + 1})`}
            </span>
            <div className="flex justify-center items-center gap-2">
              <div
                onClick={addJobSection}
                className="w-6 h-6 bg-green-1986 rounded-sm flex justify-center items-center cursor-pointer shadow-[0_2px_8px_0_rgb(33,36,39,0.12)]"
              >
                <PlusIcon className="text-white" />
              </div>
              {index !== 0 && (
                <div
                  onClick={() => deleteJobSection(section.id)}
                  className="w-6 h-6 bg-rose-faux rounded-sm flex justify-center items-center cursor-pointer shadow-[0_2px_8px_0_rgb(33,36,39,0.12)]"
                >
                  <DeleteIcon />
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
            <JobTitleDropdown />

            <div className="w-full h-12 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] px-4 py-[13px] border border-gray-300">
              <input
                className="outline-none w-full"
                placeholder="Training center"
                type="text"
              />
            </div>

            <div className="w-full h-12 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] px-4 py-[13px] border border-gray-300">
              <input
                className="outline-none w-full"
                placeholder="Certificate Number"
                type="text"
                value={certificateNumbers[section.id] || ""}
                onChange={(e) => handleCertificateChange(e, section.id)}
                inputMode="numeric"
              />
            </div>

            <div className="w-full h-12 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] px-4 py-[13px] border border-gray-300 flex justify-between items-center">
              <input
                className="outline-none w-full"
                placeholder="Issued Date"
                type="text"
                value={
                  dates[section.id]?.issuedDate?.toLocaleDateString() || ""
                }
                readOnly
              />
              <DatePicker
                selectedDate={dates[section.id]?.issuedDate}
                onDateChange={(date) =>
                  handleDateChange(section.id, "issuedDate", date)
                }
              />
            </div>

            <div className="w-full h-12 rounded-lg shadow-[0_1px_4px_0_rgb(33,36,39,0.04)] px-4 py-[13px] border border-gray-300 flex justify-between items-center">
              <input
                className="outline-none w-full"
                placeholder="Validity Date of the Certificate"
                type="text"
                value={
                  dates[section.id]?.validityDate?.toLocaleDateString() || ""
                }
                readOnly
              />
              <DatePicker
                selectedDate={dates[section.id]?.validityDate}
                onDateChange={(date) =>
                  handleDateChange(section.id, "validityDate", date)
                }
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Section2p3;
