import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ScrollToTop from "./ScrollToTop";
import About from "./Views/About/About";
import Contact from "./Views/Contact/Contact";
import Home from "./Views/Home/Home";
import ServiceSection from "./Views/Home/ServiceSection";
import ServiceDetails from "./Views/Service/ServiceDetails";
import Solution from "./Views/Solution/Solution";

const Router = () => {


  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service/media-buying" element={<ServiceSection />} />
        <Route path="/service/branding" element={<ServiceSection />} />
        <Route path="/service/digital-strategy" element={<ServiceSection />} />
        <Route path="/service/organic" element={<ServiceSection />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/service-details" element={<ServiceDetails />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
