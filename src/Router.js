import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Context } from "./Common/Context";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ScrollToTop from "./ScrollToTop";
import About from "./Views/About/About";
import Contact from "./Views/Contact/Contact";
import Home from "./Views/Home/Home";
import ServiceSection from "./Views/Home/ServiceSection";
import ServiceDetails from "./Views/Service/ServiceDetails";
import Solution from "./Views/Solution/Solution";
import Stacks from "./Views/Stacks/Stacks";

const Router = () => {
  const [contactData, setcontactData] = useState({})
  const [ContactPageLoading, setContactPageLoading] = useState(true)
  const [dropdownVisible, setdropdownVisible] = useState(false)

  
  return (
    <BrowserRouter>
      <Context.Provider value={{
        contactData, setcontactData,
        ContactPageLoading, setContactPageLoading,
        dropdownVisible, setdropdownVisible
      }}>

        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<ServiceSection />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stack" element={<Stacks />} />

          <Route path="/service-details/:id" element={<ServiceDetails />} />

        </Routes>
        <Footer />
      </Context.Provider>
    </BrowserRouter>
  );
};

export default Router;
