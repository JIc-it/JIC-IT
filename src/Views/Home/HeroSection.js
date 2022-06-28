import React from "react";
import HeroVector from "../../Assets/illustration2.png";

const HeroSection = () => {
  return (
    <section className="box-layout main-banner-wrap-layout2 has-animation ">
      <ul className="animated-figure-wrap1">
        <li>
          <div className="translate-top-left-75 opacity-animation transition-200 transition-delay-10">
            <svg width="499px" height="234px">
              <defs>
                <linearGradient
                  id="shape-gradient1"
                  x1="0%"
                  x2="50%"
                  y1="86.603%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="rgb(255,255,255)"
                    stopOpacity={1}
                  />
                  <stop
                    offset="100%"
                    stopColor="rgb(244,237,254)"
                    stopOpacity={1}
                  />
                </linearGradient>
              </defs>
              <path
                fill="url(#shape-gradient1)"
                d="M-0.000,215.998 C-0.000,215.998 314.997,325.181 499.000,0.000 L-0.000,0.000 L-0.000,215.998 Z"
              />
            </svg>
          </div>
        </li>
        <li>
          <div className="translate-bottom-left-75 opacity-animation transition-200 transition-delay-1000">
            <svg width="472px" height="472px">
              <defs>
                <linearGradient
                  id="shape-gradient2"
                  x1="0%"
                  x2="50%"
                  y1="86.603%"
                  y2="0%"
                >
                  <stop
                    offset="34%"
                    stopColor="rgb(90,73,248)"
                    stopOpacity={1}
                  />
                  <stop
                    offset="100%"
                    stopColor="rgb(255,255,255)"
                    stopOpacity={1}
                  />
                </linearGradient>
              </defs>
              <path
                fill="url(#shape-gradient2)"
                opacity="0.039"
                d="M236.000,-0.000 C366.339,-0.000 472.000,105.660 472.000,236.000 C472.000,366.339 366.339,472.000 236.000,472.000 C105.661,472.000 0.000,366.339 0.000,236.000 C0.000,105.660 105.661,-0.000 236.000,-0.000 Z"
              />
            </svg>
          </div>
        </li>
        <li>
          <div className="translate-right-75 opacity-animation transition-200 transition-delay-1200">
            <svg width="1007px" height="976px">
              <defs>
                <linearGradient
                  id="shape-gradient3"
                  x1="0%"
                  x2="50%"
                  y1="86.603%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="rgb(255,255,255)"
                    stopOpacity={1}
                  />
                  <stop
                    offset="100%"
                    stopColor="rgb(230,250,253)"
                    stopOpacity={1}
                  />
                </linearGradient>
              </defs>
              <path
                fill="url(#shape-gradient3)"
                d="M441.000,0.002 C441.000,0.002 -306.922,772.970 145.203,816.391 C145.203,816.391 790.110,895.238 1006.402,975.391 L1006.402,3.002 L441.000,0.002 Z"
              />
            </svg>
          </div>
        </li>
      </ul>
      <ul className="animated-figure-wrap2">
        <li>
          <div className="translate-top-left-10 opacity-animation transition-200 transition-delay-10">
            <img src="media/element/element4.png" alt="Element" />
          </div>
        </li>
        <li>
          <div className="translate-bottom-left-10 opacity-animation transition-200 transition-delay-500">
            <img src="media/element/element5.png" alt="Element" />
          </div>
        </li>
        <li>
          <div className="translate-bottom-left-10 opacity-animation transition-200 transition-delay-1000">
            <img src="media/element/element6.png" alt="Element" />
          </div>
        </li>
      </ul>
      <div className="opacity-animation transition-200 transition-delay-3000">
        <ul className="animated-shape-small">
          <li>
            <img src="media/element/element23.png" alt="Animated Figure" />
          </li>
          <li>
            <img src="media/element/element24.png" alt="Animated Figure" />
          </li>
          <li>
            <img src="media/element/element25.png" alt="Animated Figure" />
          </li>
          <li className="shape-one">
            <img src="media/element/element26.png" alt="Animated Figure" />
          </li>
          <li>
            <img src="media/element/element27.png" alt="Animated Figure" />
          </li>
          <li>
            <img src="media/element/element28.png" alt="Animated Figure" />
          </li>
        </ul>
      </div>
      <div className="box-layout-child">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 order-lg-2 d-flex align-items-center justify-content-center">
              <div className="main-banner-box-layout2">
                <div className="translate-right-75 opacity-animation transition-150 transition-delay-2000">
                  <div className="item-figure">
                    <img src={HeroVector} alt="Illustration" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1 d-flex align-items-center">
              <div className="main-banner-box-layout2">
                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-2000">
                  {/* <div className="item-sub-title">DEGECO THEME</div> */}
                </div>
                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-2500 mb--10">
                  <h1 className="item-main-title ">
                    The World is evolving, and We are pioneering it Digitally
                  </h1>
                </div>
                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-3000">
                  <p>
                    When the world is online, how do you evoke your business? In
                    the digital era, your clientele, partners or subsidiaries
                    won’t prefer your office destination instead, you can expect
                    a question what is your website address? That’s how the
                    digital world has evolved businesses. Across diverse digital
                    platforms, how do you make your e-commerce big? Does just
                    being online can generate more business? Within the pool of
                    gazillion websites, how do you get noticed???
                  </p>
                </div>
                {/* <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-3500">
                  <div className="banner-btns">
                    <a
                      href="service-layout1.html"
                      className="item-btn btn-fill"
                    >
                      Our Services
                      <i className="flaticon-next" />
                    </a>
                    <a href="#" className="item-btn btn-ghost btn-dark">
                      Get DegeCo
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
