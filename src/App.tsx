import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SecondPage from "./components/Second-Page/SecondPage";
import ThirdPage from "./components/Third-Page/ThirdPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SecondPage" element={<SecondPage />} />
        <Route path="/ThirdPage" element={<ThirdPage />} />
      </Routes>
    </Router>
  );
};

export default App;
