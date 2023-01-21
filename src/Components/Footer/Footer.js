import React, { useContext } from "react";
import Logo from "../../Assets/IT-logo.png";
import { Context } from "../../Common/Context";
import { Address, Mail, Phone } from "../../Views/Contact/Contact";

const Footer = () => {
  const { contactData, setcontactData } = useContext(Context)
  return (
    <footer
      id="footer-wrap-layout1"
      className="footer-wrap-layout1 bg-color-light"
    >
      <div
        className="footer-top-layout1 bg-no-repeat bg-size-cover bg-position-center"
        data-bg-image="media/element/element3.png"
      >
        <div className="px-3">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-6 col-12">
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
            <div className="col-xl-2 col-lg-2 col-md-6 col-12">
              <div className="footer-widgets">
                <h3 className="footer-widget-heading">Important Link</h3>
                <ul className="footer-menu">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/solution">Solutions</a>
                  </li>
                  <li>
                    <a href="/stack">stack</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-12">
              <div className="footer-widgets">
                <h3 className="footer-widget-heading">Our Services</h3>
                <ul className="footer-menu">
                  <li>
                    <a >Media Buying</a>
                  </li>
                  <li>
                    <a >Branding</a>
                  </li>
                  <li>
                    <a >Digital Strategy</a>
                  </li>
                  <li>
                    <a >Organic</a>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="footer-widgets">
                <h3 className="footer-widget-heading">Contact Info</h3>
                <div className="row">
                  <div className="col-lg-6 col-12 mb-3">
                    <ul className="footer-contact">
                      <li>
                        <i className="flaticon-placeholder" />
                        {contactData.address}
                      </li>
                      <li>
                        <i className="flaticon-plane" />
                        <a href={`mailto:${contactData.email}`} >{contactData.email}</a>
                      </li>
                      <li>
                        <i className="flaticon-telephone" />
                        <a href={`tel:+${contactData.phone}`}>{contactData.phone}</a>
                        <br />
                        <a href={`tel:+${918714009728}`}>{`+918714009728`}</a>
                        <br />
                        <a href={`tel:+${918714009729}`}>{`+918714009729`}</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-12  mb-3">
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