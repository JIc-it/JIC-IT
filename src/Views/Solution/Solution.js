import React from 'react'

const Solution = () => {
    const data = [
        { title: 'Marketing Automation', icon: 'flaticon-marketing', desc: '', },
        { title: 'Website development', icon: 'flaticon-support', desc: '', },
        { title: 'ERP', icon: 'flaticon-result', desc: '', },
        { title: 'CRM', icon: 'flaticon-result', desc: '', },
        { title: 'HRMS', icon: 'flaticon-result', desc: '', },
        { title: 'Explainer videos', icon: 'flaticon-canvas', desc: '', },
        { title: 'AI chat bots', icon: 'flaticon-internet', desc: '', },
        { title: 'WhatsApp bot', icon: 'flaticon-null', desc: '', },
        { title: 'B2B Lead generation', icon: 'flaticon-award', desc: '', },
        { title: 'Mobile App Development', icon: 'flaticon-responsive', desc: '', },
        { title: 'UX design services', icon: 'flaticon-design', desc: '', },
        { title: 'Web application development', icon: 'flaticon-responsive', desc: '', },
        { title: 'E-commerce development', icon: 'flaticon-project-1', desc: '', },
    ]
    return (
        <section className="service-wrap-layout6 section-padding-md bg-color-light">
            <div className="container">
                <div className="section-heading heading-dark heading-layout1">
                    <h2 className="heading-main-title">Solution</h2>
                    <p className="heading-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry's standard dummy text ever since</p>
                </div>
                <div className="row">
                    {data.map((item, idx) => (
                        <div className="col-lg-4 col-sm-6 col-12 has-animation ">
                            <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-100">
                                <div className="service-box-layout3">
                                    <div className={`item-icon ${idx % 2 === 0 ? 'california':'emerald'}`}>
                                    <i className={item.icon} />
                                </div>
                                <div className="item-content">
                                    <h3 className="item-title"><a href="service-details.html">{item.title}</a></h3>
                                    <p>Grursus mal suada faci ipsum and our the more at dolarorit ametion consectetur elit bulum odio suada text.</p>
                                    <a href="service-details.html" className="btn-text">Read More<i className="flaticon-next" /></a>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}


                {/* <div className="col-lg-4 col-sm-6 col-12 has-animation ">
                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-300">
                        <div className="service-box-layout3">
                            <div className="item-icon emerald">
                                <i className="flaticon-growth-1" />
                            </div>
                            <div className="item-content">
                                <h3 className="item-title"><a href="service-details.html">Development</a></h3>
                                <p>Grursus mal suada faci ipsum and our the more at dolarorit ametion consectetur elit bulum odio suada text.</p>
                                <a href="service-details.html" className="btn-text">Read More<i className="flaticon-next" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12 has-animation ">
                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-500">
                        <div className="service-box-layout3">
                            <div className="item-icon royal-blue">
                                <i className="flaticon-marketing" />
                            </div>
                            <div className="item-content">
                                <h3 className="item-title"><a href="service-details.html">Creative Layout</a></h3>
                                <p>Grursus mal suada faci ipsum and our the more at dolarorit ametion consectetur elit bulum odio suada text.</p>
                                <a href="service-details.html" className="btn-text">Read More<i className="flaticon-next" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12 has-animation ">
                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-100">
                        <div className="service-box-layout3">
                            <div className="item-icon dodger-blue">
                                <i className="flaticon-internet" />
                            </div>
                            <div className="item-content">
                                <h3 className="item-title"><a href="service-details.html">Interface Design</a></h3>
                                <p>Grursus mal suada faci ipsum and our the more at dolarorit ametion consectetur elit bulum odio suada text.</p>
                                <a href="service-details.html" className="btn-text">Read More<i className="flaticon-next" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12 has-animation ">
                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-300">
                        <div className="service-box-layout3">
                            <div className="item-icon sunset-orange">
                                <i className="flaticon-click" />
                            </div>
                            <div className="item-content">
                                <h3 className="item-title"><a href="service-details.html">SEO Optimized</a></h3>
                                <p>Grursus mal suada faci ipsum and our the more at dolarorit ametion consectetur elit bulum odio suada text.</p>
                                <a href="service-details.html" className="btn-text">Read More<i className="flaticon-next" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12 has-animation ">
                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-500">
                        <div className="service-box-layout3">
                            <div className="item-icon turquoise">
                                <i className="flaticon-support" />
                            </div>
                            <div className="item-content">
                                <h3 className="item-title"><a href="service-details.html">Awesome Support</a></h3>
                                <p>Grursus mal suada faci ipsum and our the more at dolarorit ametion consectetur elit bulum odio suada text.</p>
                                <a href="service-details.html" className="btn-text">Read More<i className="flaticon-next" /></a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
        </section >

    )
}

export default Solution