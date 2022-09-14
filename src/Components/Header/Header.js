import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Assets/IT-logo.png";
import { url } from "../../Common/Config";
import { Context } from "../../Common/Context";
import Nav from "./Nav";
import Collapsible from 'react-collapsible';


const Header = () => {
  const { contactData, setcontactData, ContactPageLoading, setContactPageLoading } = useContext(Context)
  const { pathname } = useLocation();
  const [isMobile, setisMobile] = useState(false);
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false);
  const [ServiceNav, setServiceNav] = useState([])
  const [CategoryVisible, setCategoryVisible] = useState(false)
  const [dropdownVisible, setdropdownVisible] = useState(false)


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

  useEffect(() => {
    GetServices()
    getContactData()
  }, [])


  const hideDropdown = () => {
    document.querySelector('.mega-menu-container').style.opacity = '0'
  }
  const showDropdown = (param) => {
    // alert(param)
    if (param === "Service") {
      document.querySelector('.mega-menu-container').style.opacity = '1'
    }

  }



  const GetServices = async () => {
    var config = {
      method: 'get',
      url: url + '/category/',
    };
    console.log('GET API config', config)

    await axios(config)
      .then(function (response) {
        console.log("GET API response", response)
        if (response.data) {
          setServiceNav(response.data)
        }
      })
      .catch(function (error) {
        console.log("GET API error", error)



      });

  }

  const getContactData = async () => {


    var config = {
      method: 'get',
      url: url + '/contact/',
      headers: {}
    };

    await axios(config)
      .then(function (response) {
        // console.log(response)
        setcontactData(response.data[0])
        setContactPageLoading(false)
        // setLoading(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <header className="sticky-on d-lg-block d-none">
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
                              <Link to={item.url} >{item.title}</Link>
                            ) : (
                              <>
                                <a onMouseEnter={() => showDropdown(item.title)}>{item.title}</a>
                                {!!ServiceNav.length && (
                                  <div className="mega-menu-container" style={{ width: '80%', margin: 'auto', padding: '3.5rem 3rem' }}>
                                    <div className="row">
                                      {ServiceNav?.map((itm) => (
                                        <div className="col-lg-3">
                                          <a >
                                            <span style={{ textTransform: 'uppercase', fontWeight: 800, color: '#5a49f8' }}>{itm.name}</span>
                                          </a>
                                          <ul className="d-flex" style={{ flexDirection: 'column' }}>
                                            {itm.services.map((navMenus, idx) => (

                                              <Link to={`/service-details/${navMenus.heading.replaceAll(' ', '-')}`} className="hover-underline-animation " onClick={hideDropdown}>
                                                {navMenus.heading}</Link>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </>
                            )}




                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                  <div className="col-lg-3 d-flex justify-content-end">
                    {/* <ul className="header-action-items">
                      <li className="single-item mr-2">
                        <a href="#" className="item-btn btn-fill btn-primary">
                          Get a Quote
                        </a>
                      </li>
                    </ul> */}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mean-container d-block d-lg-none">
        <div className="mean-bar ">
          <div className="mobile-menu-nav-back">
            <a className="logo-mobile" href="index.html">
              <img src={Logo} alt="logo" style={{ height: '2.25rem' }} className="img-fluid" />
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
                    overflowY: 'scroll',
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
                  {item.title !== "Service" ?
                    <Link to={item.url ? item.url : '/'}>{item.title}</Link>
                    :
                    <Collapsible trigger={<a>{item.title}</a>}>
                      {(item.title === "Service" && !!ServiceNav.length) &&
                        <>
                         
                          {ServiceNav.map(item => (

                            <li>
                              <>
                                {item.name}
                              </>

                              {/* <ul className="dropdown-menu-col-1" >
                                {item.services.map(itm => (
                                  <>

                                    <div className="collapse" id={item.name}>

                                      <Nav data={itm} />
                                    </div>
                                  </>

                                ))}

                              </ul> */}


                            </li>
                          ))}
                        </>
                      }
                      

                    </Collapsible>
                  }

                  {/* <a className="mean-expand" onClick={() => setCategoryVisible(!CategoryVisible)} style={{ fontSize: 18 }}>{CategoryVisible ? '-' : '+'}</a> */}
                </li>
              ))}


            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}


export default Header;
export const NavItems = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Service", },
  { title: "Solution", url: "/solution" },
  { title: "Stack", url: "/stack" },
  { title: "Contact", url: "/contact" },
];
