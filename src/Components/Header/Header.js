import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Assets/IT-logo.png";

const Header = () => {
  const { pathname } = useLocation();
  const [isMobile, setisMobile] = useState(false);
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!!window.IntersectionObserver) {
      let observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            // console.log(entry);
            if (entry.isIntersecting) {
              entry.target.classList.add("active-animation");
              //entry.target.src = entry.target.dataset.src;
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: "-10%",
        }
      );
      document.querySelectorAll(".has-animation").forEach((block) => {

        observer.observe(block);
      });
    } else {
      document.querySelectorAll(".has-animation").forEach((block) => {
        block.classList.remove("has-animation");
      });
    }
  }, [pathname]);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth <= 992) {
          setisMobile(true);
        } else {
          setisMobile(false);
        }
      },
      true
    );
  }, [window.innerWidth]);

  if (!isMobile) {
    return (
      <>
        <header className="sticky-on">
          <div id="sticky-placeholder" />
          <div id="navbar-wrap" className="navbar-wrap">
            <div className="navbar-layout2">
              <div className="box-layout-child">
                <div className="container-fluid">
                  <div className="row no-gutters d-flex align-items-center position-relative">
                    <div className="col-lg-2 d-flex justify-content-start">
                      <div className="temp-logo text-center">
                        <a href="index.html" className="default-logo">
                          <img
                            src={Logo}
                            alt="logo"
                            style={{ height: "4rem" }}
                            className="img-fluid"
                          />
                        </a>
                        <a href="index.html" className="sticky-logo">
                          <img
                            src={Logo}
                            style={{ height: "4rem" }}
                            alt="logo"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-7 d-flex justify-content-end possition-static">
                      <nav
                        id="dropdown"
                        className="template-main-menu"
                        style={{ display: "block" }}
                      >
                        <ul>
                          {NavItems.map((item) => (
                            <li className="position-static d-none d-lg-block">
                              {item.url ? (
                                <Link to={item.url}>{item.title}</Link>
                              ) : (
                                <a >{item.title}</a>
                              )}


                              {item.subCategory && (
                                <div className="mega-menu-container" style={{ width: '80%', margin: 'auto', padding:'3.5rem 3rem' }}>
                                  <div className="row">
                                    {item.subCategory?.map((itm) => (
                                      <div className="col-lg-3">
                                        <a >
                                          <span style={{ textTransform: 'uppercase', fontWeight: 800, color:'#5a49f8' }}>{itm.title}</span>
                                        </a>
                                        <ul className="d-flex" style={{flexDirection:'column'}}>
                                          {itm.subMenu.map(navMenus => (

                                            <Link to={navMenus.url} className="hover-underline-animation ">
                                              {navMenus.title}</Link>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-end">
                      <ul className="header-action-items">
                        <li className="single-item mr-2">
                          <a href="#" className="item-btn btn-fill btn-primary">
                            Get a Quote
                          </a>
                        </li>
                        {/* <li className="single-item">
                        <button
                          type="button"
                          className="offcanvas-menu-btn menu-status-open"
                        >
                          <span className="menu-btn-icon">
                            <span />
                            <span />
                            <span />
                          </span>
                        </button>
                      </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  } else {
    return (
      <div className="mean-container">
        <div className="mean-bar ">
          <div className="mobile-menu-nav-back">
            <a className="logo-mobile" href="index.html">
              <img src={Logo} alt="logo" className="img-fluid" />
            </a>
          </div>
          <a
            onClick={() => setmobileMenuOpen(!mobileMenuOpen)}
            className="meanmenu-reveal"
            style={{ background: "", color: "", right: 0, left: "auto" }}
          >
            <span />
            <span />
            <span />
          </a>
          <nav className="mean-nav">
            <ul
              style={
                mobileMenuOpen
                  ? {
                    height: "100vh",
                    overflow: "hidden",
                    transition: "all 0.65s ease-in-out 0s",
                  }
                  : {
                    height: 0,
                    overflow: "hidden",
                    transition: "all 0.65s ease-in-out 0s",
                  }
              }
            >
              {NavItems.map((item) => (
                <li>
                  <Link to={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
};

export default Header;
export const NavItems = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  {
    title: "Service",
    subCategory: [
      {
        title: "media buying", subMenu: [
          { title: 'shopping campaigns', url: '/service-details' },
          { title: 'display ads', url: '/service-details' },
          { title: ' native advertising', url: '/service-details' },

        ]
      },
      {
        title: "branding", subMenu: [
          { title: 'digital branding', url: '/service-details' },
          { title: 'brand identity', url: '/service-details' },
          { title: 'brand analytics', url: '/service-details' },

        ]
      },
      {
        title: "Digital strategy", subMenu: [
          { title: 'digital marketing strategy', url: '/service-details' },
          { title: 'E-mail marketing', url: '/service-details' },
          { title: 'search engine marketing', url: '/service-details' },
          { title: 'mobile app marketing', url: '/service-details' },
          { title: 'local and international SEO', url: '/service-details' },
          { title: 'conversion rate optimization', url: '/service-details' },
          { title: 'influence marketing', url: '/service-details' },
          { title: 'content marketing', url: '/service-details' },
          { title: 'PPC', url: '/service-details' },
          { title: 'Google Analytics', url: '/service-details' },
          { title: 'social media optimization', url: '/service-details' },
          { title: 'social media marketing', url: '/service-details' },
          { title: 'ASO', url: '/service-details' },
        ]
      },
      {
        title: "organic", subMenu: [
          { title: 'Copywriting', url: '/service-details' },
          { title: 'content writing', url: '/service-details' },
          { title: 'Graphic Designing', url: '/service-details' },
          { title: 'visual creation Solutions', url: '/service-details' },
          
        ]
      },
    ],
  },
  { title: "Solution", url: "/" },
  { title: "Stack", url: "/" },
  { title: "Contact", url: "/contact" },
];
