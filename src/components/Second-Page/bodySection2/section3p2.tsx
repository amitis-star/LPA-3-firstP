import React, { useRef, useState } from "react";
import "../../../assets/style/index.css";
import Camera from "../../../assets/icons/camera";

const Section3p2 = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [fileInfo, setFileInfo] = useState<{
    name: string;
    url: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setFileInfo({ name: file.name, url: file.name });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-12 mb-6">
      <span className="text-16 font-700 text-gray-900">
        Completion of personal information
      </span>

      <div className="flex justify-start gap-4 mt-8 items-end flex-flow flex-wrap">
        <div
          className="w-16.5 h-22 rounded-lg flex justify-center items-center border border-gray-400 overflow-hidden cursor-pointer"
          onClick={handleImageClick}
        >
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-full object-cover"
            />
          ) : (
            <Camera className="text-gray-400" />
          )}
        </div>
        <div className="flex flex-col gap-1">
          {fileInfo && (
            <p className="text-12 break-all">
              <span className="text-black font-500">File:</span>
              <span className="text-gray-500">{fileInfo.name}</span>
            </p>
          )}
          <button
            className="py-2.5 px-4 bg-green-1986 rounded-lg text-white w-[245px]"
            onClick={handleButtonClick}
          >
            {selectedImage ? "Change 3x4 photo" : "Select 3x4 photo"}
          </button>
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      <div className="flex justify-start items-center gap-1 mt-2">
        <div className="w-2 h-2 bg-orange-vivid_Tangelo rounded-full"></div>
        <p className="text-10 font-400 text-orange-vivid_Tangelo">
          A 3×4 cm formal photo shall be uploaded.
        </p>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 w-full h-full top-00 left-00 bottom-00 right-00"
          onClick={closeModal}
        >

          <div
            className="bg-white w-[304px] h-[478px] rounded-lg flex flex-col justify-between shadow-[0px_1px_4px_0px_rgba(33,36,39,0.04)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center h-[406px]">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Full size"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              )}
            </div>

            <div className="px-4 pb-4">
              {" "}
              <button
                className="w-full py-2 bg-green-1986 text-white rounded-lg"
                onClick={closeModal}
              >
                Close Photo
              </button>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Section3p2;
