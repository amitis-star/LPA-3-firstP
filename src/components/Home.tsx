import React from "react";

import "../assets/style/index.css";

import Header from "./Front-Page/Header";
import Section1 from "./Front-Page/Body/Section1";
import Section2 from "./Front-Page/Body/Section2";
import Section3 from "./Front-Page/Body/Section3";

const Home = () => {
  return (
    <>
     <Header/>
     <Section1/>
     <Section2/>
     <Section3/>
    </>
  );
};

export default Home;
