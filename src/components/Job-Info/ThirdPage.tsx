import React from "react";
import "../../assets/style/index.css";
import Header from "../../Header";
import Section1p3 from "./bodySection3/Section1p3";
import Section2p3 from "./bodySection3/Section2p3";
import Section3p3 from "./bodySection3/Section3p3";
import Section5p2 from "../User-Info/bodySection2/Section5p2";
import Section4p3 from "./bodySection3/Section4p3";

const ThirdPage = () => {
  return (
    <>
      <Header />
      <div className="px-[28px] md:px-[70px] xl:px-[268px]">
        <Section1p3 />
        <Section2p3 />
        <Section3p3 />
        <Section5p2 />
        <Section4p3 />
      </div>
    </>
  );
};

export default ThirdPage;
