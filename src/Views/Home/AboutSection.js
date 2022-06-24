import React from "react";
import Vector from "../../Assets/about4.png";
import TextButtonWithArrow from "../../Components/UiComponents/TextButtonWithArrow";

const AboutSection = ({ handleClick }) => {
  return (
    <section className="section-padding-md about-wrap-layout1">
      <ul className="animated-shape has-animation">
        <li>
          <div className="translate-right-75 opacity-animation transition-200 transition-delay-10">
            <img src="media/element/element17.png" alt="Animated Figure" />
          </div>
        </li>
      </ul>
      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 pl-0 pr-0">
            <div className="about-box-layout1">
              <ul className="figure-holder has-animation">
                <li className="animated-bg">
                  <div className="translate-left-75 opacity-animation transition-200 transition-delay-10">
                    <svg width="638px" height="514px">
                      <path
                        fillRule="evenodd"
                        opacity="0.031"
                        fill="rgb(2, 86, 225)"
                        d="M256.191,-0.005 C397.682,-0.005 406.513,181.938 525.597,258.322 C824.664,450.157 454.262,521.729 256.191,512.196 C114.864,505.394 -0.000,397.536 -0.000,256.097 C-0.000,114.655 114.701,-0.005 256.191,-0.005 Z"
                      />
                    </svg>
                  </div>
                </li>
                <li className="animated-figure">
                  <div className="translate-left-75 opacity-animation transition-150 transition-delay-1000">
                    <img src={Vector} alt="About" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 compress-right-side">
            <div className="about-box-layout1">
              <div className="content-holder has-animation">
                {/* <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1000">
                  <h2 className="item-title">
                    Exclusive Agency For Technology Provide Soluation
                  </h2>
                </div> */}
                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1300">
                  <p>
                    Businesses ace to enhance their sales and revenue through
                    their digital channels, and they require visibility into the
                    capacity and productivity among all their channels for
                    optimizing outcomes and easing their difficulties. To
                    accelerate their service for the changing buyer needs they
                    need to reboot their market routes thereby becoming an
                    absorbent of both customers and sales.
                  </p>
                </div>
                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1300">
                  <p>
                    We help your business upgrade with advanced end-to-end
                    solutions revolutionizing the buying and selling experience
                    by employing growth consistency. For maximizing your growth
                    potential, we stabilize the complexity and commerce of the
                    sale ecosystem with a lively business model that helps our
                    clients sell across the globe.
                  </p>
                </div>
                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1600">
                  <ul className="list-item">
                    <TextButtonWithArrow
                      text={"Instant digital commercial enhancement for you"}
                      url={"#Feacture1"}
                      handleClick={handleClick}
                    />
                    <TextButtonWithArrow
                      text={
                        "Get ratings and grow larger by developing your digital platform"
                      }
                      url={"#Feacture2"}
                      handleClick={handleClick}
                    />
                    <TextButtonWithArrow
                      text={"The world of Apps for limitless opportunities"}
                      url={"#Feacture3"}
                      handleClick={handleClick}
                    />
                  </ul>
                </div>
                {/* <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1900">
                  <a href="about.html" className="btn-fill btn-gradient">
                    Read More
                    <i className="flaticon-next" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
