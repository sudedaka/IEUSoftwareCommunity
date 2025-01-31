import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import Calendar from "./components/Calendar/Calendar.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import OurTeam from "./components/OurTeam/OurTeam.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const App = () => {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <Navbar onContactClick={scrollToFooter} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer ref={footerRef} />
    </Router>
  );
};

export default App;
