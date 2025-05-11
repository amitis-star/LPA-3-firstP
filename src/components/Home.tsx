import React from "react";

import "../assets/style/index.css";

import Header from "./Front-Page/Header";
import Section1 from "./Front-Page/Body/Section1";
import BodyFrontPage from "./Front-Page/Body/BodyFrontPage";

const Home = () => {
  return (
    <>
     <Header/>
     <Section1/>
     <BodyFrontPage/>
    </>
  );
};

export default Home;
