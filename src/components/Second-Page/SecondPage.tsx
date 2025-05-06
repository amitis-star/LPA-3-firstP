import React from "react";
import "../../assets/style/index.css";
import Header from "../Front-Page/Header";
import Section2p2 from "./bodySection2/Section2p2";
import Section3p2 from "./bodySection2/section3p2";
import Section4p2 from "./bodySection2/Section4p2";
import Section5p2 from "./bodySection2/Section5p2";
import Section6p2 from "./bodySection2/Section6p2";

const SecondPage = () => {
  return (
    <>
      <Header />
      <div className="px-[28px] md:px-[70px] xl:px-[268px]">
        <Section2p2 />
        <Section3p2 />
        <Section4p2 />
        <Section5p2 />
        <Section6p2 />
      </div>
    </>
  );
};

export default SecondPage;
