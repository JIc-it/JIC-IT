import React from 'react'
import { url } from '../../Common/Config'
import ReactHtmlParser from 'react-html-parser';

const SectionLayout3 = ({ image, icon, heading, subHeading, description, buttonLink, buttonName, cards, points, sectionClassName }) => {
    return (
        <section className={"service-wrap-layout2  bg-color-light position-relative "}>
            <div className={sectionClassName}>
                <div className="animated-figure">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="682px" height="624px" data-parallax="{&quot;x&quot; : 150, &quot;y&quot; : -400}" style={{ transform: 'translate3d(0.576px, -1.479px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)', WebkitTransform: 'translate3d(0.576px, -1.479px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)' }}>
                        <path fillRule="evenodd" fill="rgb(249, 251, 255)" d="M129.861,445.151 C135.817,359.733 165.631,309.507 69.925,231.284 C-48.622,134.391 1.806,7.438 100.124,2.487 C180.263,-1.549 184.232,52.109 291.793,81.829 C351.092,98.213 363.911,86.655 391.662,45.581 C442.752,-30.034 518.868,-4.403 507.727,69.983 C496.050,147.952 503.636,232.416 606.763,223.993 C707.036,215.803 714.686,361.609 582.959,374.723 C481.641,384.808 441.418,364.086 368.153,540.352 C316.484,664.660 114.605,663.966 129.861,445.151 Z" />
                    </svg>
                </div>
                <div className=" row">
                    <div className="col-lg-6 col-12">

                        <div className="section-heading heading-dark heading-layout7">
                            <div className="heading-sub-title">{subHeading}</div>
                            <h2 className="heading-main-title">{heading}</h2>
                            <div className="">{ReactHtmlParser(description)}</div>

                        </div>
                        
                        {points &&
                            <div className="footer-top-layout9 pt-0">
                                <div className="">
                                    <div className="footer-widgets">
                                        {/* <h3 className="footer-widget-heading">Our Services</h3> */}
                                        <ul className="footer-menu">
                                            {points.map(item => (
                                                <li><a style={{ color: '#5a49f8' }}>{item.points}</a></li>

                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                    {image &&
                        <div class="col-lg-6  has-animation active-animation">
                            <div class="translate-right-75 opacity-animation transition-150 transition-delay-10">
                                <div class="feature-box-layout5">
                                    <div class="item-figure">
                                        <img src={url + image} alt="Feature" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                {cards &&
                    <div className="">
                        <div className="row has-animation active-animation">
                            {cards.map(item => (
                                <div className="col-xl-4 col-sm-6">
                                    <div className="translate-left-10 opacity-animation transition-100 transition-delay-100">
                                        <div className="service-box-layout2 layout-bg-california">
                                            {/* <div className="item-icon icon-bg-california">
                                        <div className="icon-color icon-color-california">
                                            <i className="flaticon-filter" />
                                        </div>
                                    </div> */}
                                            <h3 className="item-title"><a href="service-details.html">{item.heading}</a></h3>
                                            <p>{item.description}</p>
                                            {(buttonLink && buttonName) &&
                                                <a href={buttonLink} className="item-btn btn-text">{buttonName}<i className="flaticon-next" /></a>
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>
        </section>


    )
}

export default SectionLayout3