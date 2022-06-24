import React, { useRef } from "react";
import ScrollTop from "../../Components/UiComponents/ScrollTop";
import AboutSection from "./AboutSection";
import FeatureSection from "./FeatureSection";
import GoldenCircle from "./GoldenCircle";
import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
import ProgressSection from "./ProgressSection";
import ServiceSection from "./ServiceSection";
import TestimonialSection from "./TestimonialSection";

const Home = () => {



  return (
    <section>
      <div id="wrapper" className="wrapper">
        <ScrollTop />
        <div id="main_content">
          <HeroSection />

          <AboutSection />

          <ProcessSection />

          <FeatureSection />
          
          <div
            className="offcanvas-menu-wrap"
            id="offcanvas-wrap"
            data-position="left"
          >
            <div className="close-btn offcanvas-close">
              <i className="fas fa-times" />
            </div>
            <div className="offcanvas-content">
              <div className="offcanvas-logo">
                <a href="index.html">
                  <img src="media/logo.png" alt="logo" />
                </a>
              </div>
              <nav>
                <ul className="offcanvas-nav">
                  <li className="nav-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="nav-item">
                    <a href="about.html">About</a>
                  </li>
                  <li className="nav-item">
                    <a href="service-layout1.html">Service</a>
                  </li>
                  <li className="nav-item">
                    <a href="gallery-grid-2-column.html">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a href="team.html">Team</a>
                  </li>
                  <li className="nav-item">
                    <a href="blog-grid.html">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
              <div className="offcanvas-footer">
                <div className="item-title">Follow Me</div>
                <ul className="offcanvas-social">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-rss" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*=====================================*/}
          {/*=           Offcanvas End           =*/}
          {/*=====================================*/}
        </div>
      </div>
    </section>
  );
};

export default Home;
