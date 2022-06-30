import React from "react";
import Logo from "../../Assets/IT-logo.png";
import { Address, Mail, Phone } from "../../Views/Contact/Contact";

const Footer = () => {
  return (
    <footer
      id="footer-wrap-layout1"
      className="footer-wrap-layout1 bg-color-light"
    >
      <div
        className="footer-top-layout1 bg-no-repeat bg-size-cover bg-position-center"
        data-bg-image="media/element/element3.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-12">
              <div className="footer-widgets">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src={Logo} style={{ height: "5.4rem" }} alt="Logo" />
                  </a>
                </div>
                {/* <p className="about-paragraph">
                  Grursus mal suada faci Lorem to the ipsum dolarorit more
                  ametion more consectetur elit.
                </p> */}
                <ul className="footer-social">
                  {socialMedias.map(item => (

                    <li>
                      <a href={item.url} target={"_blank"}>
                        <i className={item.icon} />
                      </a>
                    </li>
                  ))}

                </ul>
              </div>
            </div>
            {/* <div className="col-xl-2 d-none d-xl-block">
              <div className="footer-widgets">
                <h3 className="footer-widget-heading">Workflows</h3>
                <ul className="footer-menu">
                  <li>
                    <a href="#">Management</a>
                  </li>
                  <li>
                    <a href="#">Reporting</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                  <li>
                    <a href="#">Customers</a>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-12">
              <div className="footer-widgets">
                <h3 className="footer-widget-heading">Important Link</h3>
                <ul className="footer-menu">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="#">How to work</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Our Media</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-12">
              <div className="footer-widgets">
                <h3 className="footer-widget-heading">Our Services</h3>
                <ul className="footer-menu">
                  <li>
                    <a href="service-details.html">Web Design</a>
                  </li>
                  <li>
                    <a href="service-details.html">Development</a>
                  </li>
                  <li>
                    <a href="service-details.html">Graphic Design</a>
                  </li>
                  <li>
                    <a href="service-details.html">Branding</a>
                  </li>
                  <li>
                    <a href="service-details.html">Creative Solution</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-12">
              <div className="footer-widgets">
                <h3 className="footer-widget-heading">Contact Info</h3>
                {/* <p>Grursus mal suada faci lisis Lorem to ipsum consectetur.</p> */}
                <ul className="footer-contact">
                  <li>
                    <i className="flaticon-placeholder" />
                    {Address}
                  </li>
                  <li>
                    <i className="flaticon-plane" />
                    <a href={`mailto:${Mail}`} >{Mail}</a>
                  </li>
                  <li>
                    <i className="flaticon-telephone" />
                    <a href={`tel:+${Phone}`}>{Phone}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-layout1 bg-color-accent">
        <div className="container">
          <div className="copy-right-wrap">
            <p className="copy-right-text">
              © 2022{" "}
              JIC IT Solutions.
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
export const socialMedias = [
  { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/jicitsolutions/' },
  { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/company/jic-it-solutions-pvt-ltd/' },
  { icon: 'fab fa-instagram', url: 'https://www.instagram.com/jicitsolutions/' },
]