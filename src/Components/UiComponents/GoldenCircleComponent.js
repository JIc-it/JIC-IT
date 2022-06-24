import React, { useState } from "react";

const GoldenCircleComponent = ({ title }) => {
  const [MouseEnter, setMouseEnter] = useState(false);
  return (
    <div className="col-lg-4 col-sm-6 col-12 has-animation active-animation">
      <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-100">
        <div className="team-box-layout2">
          <div
            className="maks-item animted-bg-wrap"
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
          >
            <span
              className="animted-bg"
              style={{ top: "94.8127px", left: "49.4px" }}
            />
            <div className="item-figure">
              {/* <img src="media/team/team10.jpg" alt="Team" /> */}
              <div className="circle">
                <p style={MouseEnter ? { color: "#fff" } : null}>{title}</p>
              </div>
            </div>
          </div>
          {/* <div className="item-content">
            <h3 className="item-title">
              <a href="#">Henry Nichols</a>
            </h3>
            <div className="sub-title">Founder Ceo</div>
            <ul className="social-items">
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
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-pinterest-p" />
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GoldenCircleComponent;
