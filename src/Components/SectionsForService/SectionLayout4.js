import React from 'react'
import ReactHtmlParser from 'react-html-parser';

const SectionLayout4 = ({ image, icon, heading, subHeading, description, cards, sectionClassName, points }) => {
    return (
        <section className={"service-wrap-layout8  "}>
            <div className={sectionClassName}>

                <div className="section-heading heading-dark heading-layout7 color-heliotrope">
                    <h2 className="heading-main-title">{heading}</h2>
                    <div>
                        {ReactHtmlParser(description)}

                    </div>
                </div>
                {!!points.length &&
                    <div className='mb-5'>
                        <ul style={{
                            listStyle: 'square',
                            listStylePosition: 'inside'
                        }}>
                            {points.map(item => (

                                <li>{item.points}</li>
                            ))}
                        </ul>
                    </div>
                }
                <div>

                </div>
                <div className="row">
                    {cards.map(item => (

                        <div className="col-lg-4 col-md-6 col-12 has-animation active-animation">
                            <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-100">
                                <div className="service-box-layout6">
                                    {item.image &&
                                        <div className="item-icon">
                                            <img src={item.image} alt="Service" />
                                        </div>
                                    }
                                    <h3 className="item-title">
                                        {item.heading}
                                    </h3>
                                    <div>
                                        {ReactHtmlParser(item.description)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>

    )
}

export default SectionLayout4