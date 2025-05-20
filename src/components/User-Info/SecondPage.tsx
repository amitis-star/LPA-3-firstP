import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Header";
import Section2p2 from "./bodySection2/Section2p2";
import Section3p2 from "./bodySection2/section3p2";
import Section4p2 from "./bodySection2/Section4p2";

const SecondPage = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };

  const handleSection4Submit = () => {
    navigate("/ThirdPage");
  };

  return (
    <>
      <Header />
      <div className="px-[28px] md:px-[70px] xl:px-[268px]">
        <Section2p2 />
        <Section3p2 />
        <Section4p2 onReturn={handleReturn} onSubmit={handleSection4Submit} />
      </div>
    </>
  );
};

export default SecondPage;
