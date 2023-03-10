import React, { useEffect } from "react";
import Vector from "../../Assets/element11.png";
import AboutImg from "../../Assets/about1.jpg";
import { useState } from "react";
import { url } from "../../Common/Config";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import Collapsible from 'react-collapsible';
import ReactHtmlParser from 'react-html-parser';

const About = () => {
  const [data, setdata] = useState({})
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])


  const getData = () => {
    var config = {
      method: 'get',
      url: url + '/about/',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        console.log(response.data[0])
        setdata(response.data[0])
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  return (
    <main>
      {Loading ?
        <Loader />
        :
        <section className="about-wrap-layout3   section-padding-md">
          <div className="animated-shape">
            <ul>
              <li>
                <div className="translate-right-75 opacity-animation transition-200 transition-delay-500">
                  <img src={Vector} alt="Animated Figure" />
                </div>
              </li>
            </ul>
          </div>
          <div className="container-fluid">
            <div className="row d-flex align-items-center">
              <div className="col-xl-6 col-lg-5 col-12 pl-0 pr-0">
                <div className="about-box-layout3">
                  <ul className="figure-holder  ">
                    <li className="animated-bg">
                      <div className="translate-left-75 opacity-animation transition-200 transition-delay-10">
                        <svg width="1011px" height="793px">
                          <path
                            fillRule="evenodd"
                            fill="rgb(248, 247, 254)"
                            d="M265.339,499.191 C290.475,564.630 152.429,680.677 258.786,767.767 C357.678,848.744 440.244,712.358 565.072,670.825 C628.377,649.761 702.991,694.926 784.442,667.876 C1013.233,591.893 1073.837,334.328 942.926,182.770 C795.118,11.649 578.741,19.692 480.823,86.161 C369.882,161.472 302.205,41.329 252.768,14.176 C131.855,-52.233 -45.913,128.863 10.910,264.359 C75.208,417.683 211.867,359.981 265.339,499.191 Z"
                          />
                        </svg>
                      </div>
                    </li>
                    <li className="animated-figure">
                      <div className="translate-left-75 opacity-animation transition-200 transition-delay-500">
                        <div className="mask-image">
                          <img src={data.image} alt="About" />

                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 col-12 compress-right-side">
                <div className="about-box-layout3">
                  <div className="item-content">
                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1000">
                      <div className="sub-title">{data.name}</div>
                    </div>
                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1500">
                      <h2 className="item-title">
                        {data.heading}
                      </h2>
                    </div>
                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-2000">
                      <p>
                        {ReactHtmlParser(data.description)}
                      </p>
                    </div>
                    {/* <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-2500">
                  <a href="about.html" className="btn-fill btn-gradient">
                    Discover More
                    <i className="flaticon-next" />
                  </a>
                </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>
      }

    </main>
  );
};

export default About;
