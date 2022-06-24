import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import BreadCrumb from "../../Components/UiComponents/BreadCrumb";

const ServiceSection = () => {
  const { pathname } = useLocation();

  const [data, setdata] = useState({});

  useEffect(() => {
    if (pathname.includes("media")) {
      setdata(MediaBuyingData);
    }
  }, []);
  return (
    <>
      {/* <BreadCrumb /> */}

      <section className="service-wrap-layout1 section-padding-md bg-color-accent2 position-relative ">
        <div className="animated-shape">
          <ul>
            <li>
              <svg
                data-parallax='{"x" : 150, "y" : -300}'
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="638px"
                height="514px"
              >
                <path
                  opacity="0.051"
                  fill="rgb(255, 197, 4)"
                  d="M256.191,-0.004 C397.682,-0.004 406.514,181.938 525.597,258.321 C824.664,450.156 454.262,521.730 256.191,512.195 C114.864,505.394 -0.000,397.537 -0.000,256.095 C-0.000,114.655 114.701,-0.004 256.191,-0.004 Z"
                />
              </svg>
            </li>
            <li>
              <svg
                data-parallax='{"x" : -200, "y" : 400}'
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="567px"
                height="492px"
              >
                <path
                  opacity="0.031"
                  fill="rgb(122, 100, 242)"
                  d="M546.544,185.562 C513.626,116.380 454.941,60.016 385.431,26.835 C152.316,-84.442 -53.840,176.649 12.833,396.877 C24.369,434.980 46.437,474.094 84.066,487.084 C126.302,501.662 172.028,478.324 207.184,450.761 C242.341,423.198 275.543,389.558 318.953,379.003 C391.625,361.333 463.113,408.069 526.986,349.876 C577.576,303.789 573.685,242.605 546.544,185.562 Z"
                />
              </svg>
            </li>
          </ul>
        </div>

        <div className="container mt--100">
          <div className="section-heading heading-dark heading-layout1 has-animation">
            <h2 className="heading-main-title">{data.title}</h2>
            <div className="heading-icon">
              <svg className="dash-left" width={100} height={20}>
                <g fill="none" strokeWidth={4}>
                  <path
                    className="dashed1"
                    stroke="rgba(90, 73, 248, 0.5)"
                    strokeDasharray="5, 5"
                    d="M5 20 l215 0"
                  />
                  <path
                    className="dashed2"
                    stroke="white"
                    strokeDasharray="5, 5"
                    d="M5 20 l215 0"
                  />
                </g>
              </svg>
              <i className="flaticon-rocket" />
              <svg className="dash-right" width={100} height={20}>
                <g fill="none" strokeWidth={4}>
                  <path
                    className="dashed1"
                    stroke="rgba(90, 73, 248, 0.5)"
                    strokeDasharray="5, 5"
                    d="M5 20 l215 0"
                  />
                  <path
                    className="dashed2"
                    stroke="white"
                    strokeDasharray="5, 5"
                    d="M5 20 l215 0"
                  />
                </g>
              </svg>
            </div>
            <p className="heading-paragraph">{data.description}</p>
          </div>
          <div className="row masonry-items">
            {data?.services?.map((item, index) => (
              <ServiceCard
                title={item.title}
                description={item.description}
                icon={services.find((itm, idx) => idx == index).icon}
                svg={services.find((itm, idx) => idx == index).svg}
                theme={services.find((itm, idx) => idx == index).theme}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
const services = [
  {
    title: "Interface Design",
    theme: "california",
    icon: "flaticon-pen",
    description:
      "Grursus mal suada faci ipsum to and the and dolarorit ametion consectetur elitto more bulum that odio...",
    svg: (
      <svg
        className="icon-bg-shape"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100px"
        height="80px"
      >
        <path d="M95.798,66.493 C95.402,67.238 94.989,67.934 94.568,68.608 C92.140,72.492 89.322,75.200 86.228,76.996 C75.718,83.098 62.044,78.694 49.794,74.183 C30.107,66.931 13.369,52.019 4.629,32.917 C0.428,23.737 -1.365,11.491 6.138,4.714 C11.356,0.001 19.072,-0.185 26.172,0.068 C26.493,0.079 26.814,0.090 27.132,0.103 C31.363,0.275 35.595,0.448 39.826,0.620 C45.043,0.833 50.261,1.045 55.479,1.256 C57.205,1.327 58.931,1.397 60.658,1.467 C67.392,1.740 74.374,2.077 80.361,5.160 C89.583,9.908 94.528,20.156 97.310,30.121 C97.438,30.578 97.561,31.039 97.682,31.500 C100.721,43.123 101.423,55.927 95.798,66.493 Z" />
      </svg>
    ),
  },
  {
    title: "SEO & SMM services",
    theme: "emerald",
    icon: "flaticon-user-experience",
    description:
      "Grursus mal suada faci ipsum to and the and dolarorit ametion consectetur elitto more bulum that odio...",
    svg: (
      <svg
        className="icon-bg-shape"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="105px"
        height="80px"
      >
        <path d="M104.768,46.596 C103.512,53.499 97.269,58.301 91.117,61.679 C77.841,68.967 63.002,72.833 48.310,76.516 C40.421,78.492 32.367,80.451 24.252,79.893 C23.977,79.874 23.702,79.851 23.426,79.826 C15.577,79.094 7.660,75.615 3.385,69.025 C0.518,64.605 -0.391,59.254 0.154,53.978 C0.481,50.815 1.330,47.677 2.594,44.784 C4.373,40.709 6.870,37.034 9.730,33.620 C12.289,30.568 15.138,27.725 18.038,25.002 C24.140,19.273 30.567,13.891 37.279,8.890 C41.647,5.637 46.299,2.342 51.494,0.551 C56.951,-1.331 61.008,1.926 65.771,4.608 C72.267,8.264 78.490,12.408 84.374,16.984 C86.832,18.895 89.229,20.884 91.564,22.945 C92.385,23.670 93.201,24.402 94.006,25.145 C96.362,27.319 98.710,29.770 100.630,32.428 C103.718,36.705 105.691,41.522 104.768,46.596 Z" />
      </svg>
    ),
  },
  {
    title: "IT Security",
    theme: "royal-blue",
    icon: "flaticon-login",
    description:
      "Grursus mal suada faci ipsum to and the and dolarorit ametion consectetur elitto more bulum that odio...",
    svg: (
      <svg
        className="icon-bg-shape"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="119px"
        height="80px"
      >
        <path d="M118.988,32.868 C118.954,33.798 118.867,34.713 118.740,35.616 C117.289,45.963 109.998,54.513 102.246,60.696 C100.672,61.950 99.062,63.147 97.419,64.283 C85.885,72.259 72.742,77.274 59.279,78.981 C53.104,79.765 44.685,81.169 38.854,78.104 C32.784,74.915 27.054,69.136 21.255,65.231 C15.037,61.044 8.845,56.391 4.621,49.782 C0.397,43.173 -1.534,34.183 1.434,26.764 C2.652,23.719 4.595,21.166 6.927,19.084 C9.080,17.161 11.562,15.641 14.122,14.520 C16.812,13.341 19.604,12.537 22.432,11.873 C25.211,11.221 28.024,10.704 30.810,10.101 C32.737,9.685 34.655,9.223 36.569,8.737 C45.702,6.418 54.720,3.489 63.942,1.669 C75.098,-0.533 86.824,-1.043 97.533,3.095 C103.301,5.324 108.727,8.943 112.734,14.101 C114.004,15.737 115.121,17.535 116.049,19.444 C118.047,23.560 119.159,28.199 118.988,32.868 Z" />
      </svg>
    ),
  },
  {
    title: "Seo Optimizer ",
    theme: "dodger-blue",
    icon: "flaticon-innovation",
    description:
      "Grursus mal suada faci ipsum to and the and dolarorit ametion consectetur elitto more bulum that odio...",
    svg: (
      <svg
        className="icon-bg-shape"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="116px"
        height="81px"
      >
        <path d="M109.211,58.119 C103.645,68.260 94.581,77.680 82.450,80.249 C73.546,82.134 64.269,80.109 55.400,78.092 C51.907,77.297 48.414,76.503 44.921,75.708 C40.378,74.674 35.835,73.641 31.291,72.607 C25.787,71.354 20.142,70.045 15.508,67.066 C9.647,63.297 8.873,57.835 6.412,52.231 C4.771,48.495 2.992,44.886 1.723,41.136 C0.784,38.357 0.123,35.500 0.013,32.453 C-0.185,27.013 1.715,21.246 5.539,17.213 C7.301,15.355 9.470,13.864 12.033,12.944 C22.467,9.200 34.071,16.001 45.211,14.807 C57.088,13.532 65.756,3.598 77.302,0.763 C89.987,-2.353 103.658,4.415 110.574,14.666 C111.487,16.019 112.287,17.429 112.946,18.888 C113.554,20.235 114.060,21.606 114.479,22.994 C115.652,26.875 116.114,30.898 115.979,34.945 C115.712,42.910 113.146,50.950 109.211,58.119 Z" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    theme: "sunset-orange",
    icon: "flaticon-design",
    description:
      "Grursus mal suada faci ipsum to and the and dolarorit ametion consectetur elitto more bulum that odio...",
    svg: (
      <svg
        className="icon-bg-shape"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="112px"
        height="81px"
      >
        <path d="M94.170,75.633 C89.320,80.748 82.081,83.923 75.335,81.794 C69.399,79.922 65.020,74.470 59.599,71.197 C51.098,66.064 40.914,66.687 31.305,66.427 C27.387,66.323 23.278,65.938 19.374,64.964 C15.436,63.982 11.710,62.398 8.596,59.896 C7.227,58.797 5.976,57.524 4.879,56.041 C3.059,53.582 1.896,50.791 1.293,47.862 C-0.404,39.611 2.385,30.251 7.785,24.023 C13.919,16.948 22.510,13.058 31.345,10.292 C33.050,9.757 34.764,9.266 36.470,8.800 C39.687,7.924 42.924,7.120 46.176,6.383 C57.811,3.738 69.652,1.969 81.586,1.107 C82.278,1.057 82.974,1.011 83.672,0.974 C87.959,0.740 92.319,0.840 96.367,2.483 C105.518,6.200 110.819,17.150 111.330,27.451 C112.127,43.538 104.736,64.487 94.170,75.633 Z" />
      </svg>
    ),
  },
  {
    title: "Market Monitor",
    theme: "turquoise",
    icon: "flaticon-dashboard",
    description:
      "Grursus mal suada faci ipsum to and the and dolarorit ametion consectetur elitto more bulum that odio...",
    svg: (
      <svg
        className="icon-bg-shape"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="112px"
        height="81px"
      >
        <path d="M94.170,75.633 C89.320,80.748 82.081,83.923 75.335,81.794 C69.399,79.922 65.020,74.470 59.599,71.197 C51.098,66.064 40.914,66.687 31.305,66.427 C27.387,66.323 23.278,65.938 19.374,64.964 C15.436,63.982 11.710,62.398 8.596,59.896 C7.227,58.797 5.976,57.524 4.879,56.041 C3.059,53.582 1.896,50.791 1.293,47.862 C-0.404,39.611 2.385,30.251 7.785,24.023 C13.919,16.948 22.510,13.058 31.345,10.292 C33.050,9.757 34.764,9.266 36.470,8.800 C39.687,7.924 42.924,7.120 46.176,6.383 C57.811,3.738 69.652,1.969 81.586,1.107 C82.278,1.057 82.974,1.011 83.672,0.974 C87.959,0.740 92.319,0.840 96.367,2.483 C105.518,6.200 110.819,17.150 111.330,27.451 C112.127,43.538 104.736,64.487 94.170,75.633 Z" />
      </svg>
    ),
  },
];

const MediaBuyingData = {
  title: "Media Buying",
  description:
    "Your audience doesn’t need a destination for shopping!!!  Shopping Ad campaigns relevantly endorse online and local inventory of your business thus boosting the promotion of the website and thus accomplishing quality leads. Hosting the campaigns in shopping ad platforms conjugating Google and Bing have a profound beneficiary to your business. Better leads create better opportunities to enhance your growth and we make it best for you. ",
  services: [
    {
      title: "shopping campaigns",
      description:
        "By hosting your services on shopping ad campaign platforms involving Google and Bing, our responsibility to attain potentiality for your business is achieved. The exemplariness to sew up the existing shopping ad campaigns with techniques and technologies to make them productive",
    },
    {
      title: "Display ads",
      description:
        "Make yourself magnetize to the audience’s eyes…! The accession of Display Ads is an undeniable digital media strategy for every business. Businesses do have confidence with display ads, the more they see you, the more they get connected with you. Businesses get a boom with a simple and detailed display ad that attracts audiences with a slice of life impression. The display cocktail consisting of flawless and awe-inspiring content of a text, image or video will promote brand awareness, gains a newer audience, and strengthen the lead volume. ",
    },
    {
      title: "Native advertising ",
      description:
        "Where can I get their service??? As an entrepreneur, how do you feel about this client impression? Striking display banners can attract client impressions but on the contrary, they may depreciate user experience. ",
    },
    {
      title: "Mobile App Marketing ",
      description:
        "Hey, your innovative Mobile application deserves more recognition! In the digital era among the pool of gazillion of apps, it’s mandatory to reach your innovation to the right person. Make it stream beyond boundaries with the right mobile app marketing strategy. Our mobile app marketing services assure relevant and worthy traffic to your app and gain profound visibility, attention and reach. ",
    },
    {
      title: "Digital Branding ",
      description:
        "JIC IT Solutions is acknowledged as the best Branding Agency in India with gratified clientele enjoying the services across the globe. Our customized result-driven services can gain the prospects to your business. ",
    },
    {
      title: "Digital Branding ",
      description:
        "JIC IT Solutions is acknowledged as the best Branding Agency in India with gratified clientele enjoying the services across the globe. Our customized result-driven services can gain the prospects to your business. ",
    },
  ],
};
