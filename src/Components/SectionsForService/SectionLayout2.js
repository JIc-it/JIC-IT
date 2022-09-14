import React from 'react'
import { url } from '../../Common/Config'
import ReactHtmlParser from 'react-html-parser';


const SectionLayout2 = ({ image, icon, heading, subHeading, description, buttonLink, buttonName, cards, points, sectionClassName }) => {
    // console.log({ cards })
    return (
        <section className={"about-wrap-layout1 pt-5"}>
            <div className={sectionClassName}>


                <ul className={"animated-shape has-animation active-animation "}>
                    <li>
                        <div className="translate-right-75 opacity-animation transition-200 transition-delay-10">
                            <img src="/media/element/element17.png" />
                        </div>
                    </li>
                </ul>
                <div className="">
                    <div className="row d-flex align-items-center">
                        <div className={`${image ? 'col-lg-6' : 'col-lg-12'} pl-0 pr-0`}>
                            <div className="about-box-layout1">
                                <ul className="figure-holder has-animation active-animation">
                                    <li className="animated-bg">
                                        <div className="translate-left-75 opacity-animation transition-200 transition-delay-10">
                                            <svg width="638px" height="514px">
                                                <path fillRule="evenodd" opacity="0.031" fill="rgb(2, 86, 225)" d="M256.191,-0.005 C397.682,-0.005 406.513,181.938 525.597,258.322 C824.664,450.157 454.262,521.729 256.191,512.196 C114.864,505.394 -0.000,397.536 -0.000,256.097 C-0.000,114.655 114.701,-0.005 256.191,-0.005 Z" />
                                            </svg>
                                        </div>
                                    </li>

                                    {image &&
                                        <li className="animated-figure">
                                            <div className="translate-left-75 opacity-animation transition-150 transition-delay-1000">
                                                <img src={url + image} alt="About" />
                                            </div>
                                        </li>
                                    }


                                </ul>
                            </div>
                        </div>
                        <div className={`${image ? 'col-lg-6' : 'col-lg-12'} compress-right-side`}>
                            <div className="about-box-layout1">
                                <div className="content-holder has-animation active-animation">
                                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1000">
                                        <h2 className="item-title">{heading}</h2>
                                    </div>
                                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1300">
                                        {ReactHtmlParser(description)}

                                    </div>
                                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1600">
                                        <ul className="list-item">
                                            {points.map(item => (

                                                <li>{item.points}</li>
                                            ))}

                                        </ul>
                                    </div>
                                    {(buttonLink && buttonName) &&
                                        <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1900">
                                            <a href={buttonLink} className="btn-fill btn-gradient">{buttonName}<i className="flaticon-next" /></a>
                                        </div>
                                    }
                                </div>
                            </div>


                        </div>

                        <div class="row">
                            {cards?.map(item => (
                                <div class="col-lg-6 has-animation active-animation">
                                    <div class="translate-bottom-75 opacity-animation transition-200 transition-delay-100">
                                        <div class="why-choose-box-layout1">
                                            {/* <div class="item-icon">
                                                <i class="flaticon-speaker"></i>
                                            </div> */}
                                            <div class="item-content">
                                                <h3 class="item-title">{item.heading}</h3>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default SectionLayout2