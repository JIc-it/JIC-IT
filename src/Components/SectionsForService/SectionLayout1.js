import React from 'react'

const SectionLayout1 = ({image, icon, heading, subHeading, description}) => {
    return (
        <section className="service-details-wrap section-padding-md-equal bg-color-accent2">
            <div className="container">
                <div className="row mb--60 d-flex align-items-center">
                    <div className="col-lg-6 has-animation pr-5 ">
                        <div className="service-details-box">
                            <div className="content-holder">
                                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-100">
                                    <div className="icon-holder icon-color-emerald">
                                        <i className="flaticon-growth-1" />
                                    </div>
                                </div>
                                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-600">
                                    <h2 className="item-title">We Are Here For Make To Web Develoment</h2>
                                </div>
                                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1100">
                                    <div className="sub-paragraph">Lorem ipsum dolor sit amet, consectetur a sed eiusmod the tempor incididunt ut labore dummy alom.</div>
                                </div>
                                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1600">
                                    <p>Consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to consectetur elit. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the
                                        first generator on the Internet. It uses a dictionary of over 200 Latin words, That combined with a handful of model sentence generate Lorem the Ipsum which looks reasonable.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 has-animation ">
                        <div className="service-details-box">
                            <div className="item-figure">
                                <div className="translate-right-75 opacity-animation transition-150 transition-delay-500">
                                    <img src="media/illustration/illustration19.png" alt="Service" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row box-bottom-margin has-animation ">
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="service-details-box">
                            <div className="translate-zoomout-50 opacity-animation transition-150 transition-delay-100">
                                <div className="feature-item dodger-blue">
                                    <div className="feature-icon"><i className="flaticon-responsive" /></div>
                                    <div className="feature-number">1</div>
                                    <h3 className="feature-title">Fully Responsive</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="service-details-box">
                            <div className="translate-zoomout-50 opacity-animation transition-150 transition-delay-600">
                                <div className="feature-item sunset-orange">
                                    <div className="feature-icon"><i className="flaticon-hand" /></div>
                                    <div className="feature-number">2</div>
                                    <h3 className="feature-title">Device Testing</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="service-details-box">
                            <div className="translate-zoomout-50 opacity-animation transition-150 transition-delay-1100">
                                <div className="feature-item royal-blue">
                                    <div className="feature-icon"><i className="flaticon-canvas" /></div>
                                    <div className="feature-number">3</div>
                                    <h3 className="feature-title">Clean &amp; Modern</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="service-details-box">
                            <div className="translate-zoomout-50 opacity-animation transition-150 transition-delay-1600">
                                <div className="feature-item california">
                                    <div className="feature-icon"><i className="flaticon-goal" /></div>
                                    <div className="feature-number">4</div>
                                    <h3 className="feature-title">Great Experience</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex align-items-center has-animation ">
                    <div className="col-lg-6 has-animation order-lg-2 ">
                        <div className="service-details-box">
                            <div className="content-holder">
                                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-100">
                                    <h2 className="item-title">Whether You’re Looking For Answers, Would Like To Solve The Problem.</h2>
                                </div>
                                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-600">
                                    <p>Grursus mal suada faci lisis Lorem ipsum dolarorit more a ametion the consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the
                                        Internet tend to repeat predefined chunks as necessary on the Internet. It uses a dictionary of over 200 at Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 has-animation order-lg-1 ">
                        <div className="service-details-box">
                            <div className="item-figure">
                                <div className="translate-left-75 opacity-animation transition-150 transition-delay-100">
                                    <img src="media/illustration/illustration20.png" alt="Service" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SectionLayout1