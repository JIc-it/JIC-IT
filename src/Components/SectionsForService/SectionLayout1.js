import React from 'react'
import { url } from '../../Common/Config'
import ReactHtmlParser from 'react-html-parser';

const SectionLayout1 = ({ image, icon, heading, subHeading, description, cards, points, sectionClassName }) => {
    console.log({ cards })
    return (
        <section className={"service-details-wrap  bg-color-accent2 "}>
            <div className={sectionClassName}>
                <div className="row  d-flex align-items-center pt-5">
                    {!cards ?
                        <>
                            <div className={image ? 'col-lg-6 has-animation active-animation pr-5 ' : 'col-lg-12 has-animation active-animation pr-5 '}>
                                <div className="service-details-box">
                                    <div className="content-holder">
                                        {/* <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-100">
                                    <div className="icon-holder icon-color-emerald">
                                        <i className="flaticon-growth-1" />
                                    </div>
                                </div> */}
                                        {heading &&
                                            <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-600">
                                                <h2 className="item-title">{heading}</h2>
                                            </div>
                                        }
                                        {subHeading &&
                                            <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1100">
                                                <div className="sub-paragraph">{subHeading}</div>
                                            </div>
                                        }
                                        {description &&
                                            <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1600">
                                                <p>{description}</p>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            {image &&
                                <div className="col-lg-6 has-animation active-animation ">
                                    <div className="service-details-box">
                                        <div className="item-figure">
                                            <div className="translate-right-75 opacity-animation transition-150 transition-delay-500">
                                                <img src={image} alt="Service" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>
                        :


                        <div class="row gutters-50">

                            {image &&
                                <div class="col-lg-6 order-lg-2 has-animation active-animation">
                                    <div class="translate-right-75 opacity-animation transition-150 transition-delay-10">
                                        <div class="feature-box-layout5">
                                            <div class="item-figure">
                                                <img src={url + image} alt="Feature" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            <div class={`${image ? 'col-lg-6' : 'col-lg-12'}  order-lg-1 d-flex align-items-center justify-content-center has-animation active-animation`}>
                                <div class="feature-box-layout5 mb-4">

                                    {heading &&
                                        <h2 class="item-title">{heading}</h2>
                                    }

                                    <div className='mb-2'>
                                        {ReactHtmlParser(description)}
                                    </div>

                                    {!!points.length &&
                                        <div className="footer-top-layout3 py-0">
                                            <div className="">
                                                <div className="footer-widgets">
                                                    {/* <h3 className="footer-widget-heading">Our Services</h3> */}
                                                    <ul className="footer-menu">
                                                        {points.map(item => (
                                                            <li><a>{item.points}</a></li>

                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>


                            </div>
                        </div>
                    }
                    {cards &&
                        <ul class="list-layout2">
                            {cards.map((item, idx) => (

                                <li class={idx % 2 === 0 ? "color-torch-red" : "color-mountain-meadow"}>
                                    <h3 class="list-item-title">{item.heading}</h3>
                                    <p>{ReactHtmlParser(item.description)}</p>
                                </li>
                            ))}

                        </ul>
                    }







                </div>

            </div>
        </section >

    )
}

export default SectionLayout1