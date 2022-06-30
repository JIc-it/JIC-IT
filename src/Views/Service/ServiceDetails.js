import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { url } from '../../Common/Config'
import Loader from '../../Components/Loader/Loader'
import SectionLayout1 from '../../Components/SectionsForService/SectionLayout1'
import SectionLayout2 from '../../Components/SectionsForService/SectionLayout2'
import SectionLayout3 from '../../Components/SectionsForService/SectionLayout3'
import SectionLayout4 from '../../Components/SectionsForService/SectionLayout4'

const ServiceDetails = () => {
    const { id } = useParams()
    const { pathname } = useLocation()
    const [data, setdata] = useState({})
    const [Loading, setLoading] = useState(true)


    useEffect(() => {
        getData()
    }, [pathname])

    const getData = async () => {

        var config = {
            method: 'get',
            url: url + `/service/?heading=${id.replaceAll('-', ' ')}`,
            headers: {}
        };

        await axios(config)
            .then(function (res) {
                console.log(res)
                if (res.data) {
                    setdata(res.data[0])
                    setLoading(false)
                }

            })
            .catch(function (error) {
                console.log(error);
            });

    }
    // console.log({ Loading })
    return (
        <>
            {!Loading ?
                <div>
                    {/* <SectionLayout1 heading={data.heading} subHeading={data.sub_heading} description={data.description} image={data.image} /> */}
                    <section id="page-banner" class="page-banner bg-gradient-layout6 has-animation ">

                        <div class="container">
                            <div class="breadcrumbs-area">
                                <h1>{data.heading}</h1>
                                <ul>
                                    <li>
                                        <Link to={'/'}>Home</Link>
                                    </li>
                                    <li>{data.heading}</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {data?.sections?.map((item, idx) => (
                        <div >
                            {item.layout == 1 ?
                                <SectionLayout1
                                    heading={item.heading}
                                    subHeading={item.sub_heading}
                                    description={item.description}
                                    image={item.image}
                                    cards={item.cards}
                                    points={item.points}
                                    sectionClassName={'container'}
                                />
                                :
                                item.layout == 2 ?

                                    <SectionLayout2
                                        heading={item.heading}
                                        subHeading={item.sub_heading}
                                        description={item.description}
                                        image={item.image}
                                        points={item.points}
                                        cards={item.cards}
                                        sectionClassName={'container'}
                                    />

                                    : item.layout == 3 ?

                                        <SectionLayout3
                                            heading={item.heading}
                                            buttonLink={item.link}
                                            buttonName={item.button_name}
                                            subHeading={item.sub_heading}
                                            description={item.description}
                                            image={item.image}
                                            cards={item.cards}
                                            points={item.points}
                                            sectionClassName={'container'}
                                        />

                                        : item.layout == 4 &&
                                        <SectionLayout4
                                            heading={item.heading}
                                            subHeading={item.sub_heading}
                                            description={item.description}
                                            image={item.image}
                                            cards={item.cards}
                                            points={item.points}
                                            sectionClassName={'container'}
                                        />
                            }
                        </div>
                    ))}

                </div>
                :
                <Loader />

            }
        </>
    )
}

export default ServiceDetails