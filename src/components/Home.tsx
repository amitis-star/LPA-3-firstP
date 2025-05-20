import React from "react";

import "../assets/style/index.css";

import Header from "../Header";
import Section1 from "./Home-Page/Body/Section1";
import BodyFrontPage from "./Home-Page/Body/BodyFrontPage";
import StepCircle from "../StepCircle";

const Home = () => {
  return (
    <>
     <Header/>
     <Section1/>
     <BodyFrontPage/>
     <StepCircle current={3} />
    </>
  );
};

export default Home;
