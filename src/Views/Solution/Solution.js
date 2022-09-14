import React, { useEffect } from 'react'
import { useState } from 'react'
import BreadCrumb from '../../Components/UiComponents/BreadCrumb'
import axios from "axios";
import { url } from '../../Common/Config';
import Loader from '../../Components/Loader/Loader';


const Solution = () => {
    const [data, setdata] = useState({})
    const [Loading, setLoading] = useState(true)
    // const data = [
    //     { title: 'Marketing Automation', icon: 'flaticon-marketing', desc: '', },
    //     { title: 'Website development', icon: 'flaticon-support', desc: '', },
    //     { title: 'ERP', icon: 'flaticon-result', desc: '', },
    //     { title: 'CRM', icon: 'flaticon-result', desc: '', },
    //     { title: 'HRMS', icon: 'flaticon-result', desc: '', },
    //     { title: 'Explainer videos', icon: 'flaticon-canvas', desc: '', },
    //     { title: 'AI chat bots', icon: 'flaticon-internet', desc: '', },
    //     { title: 'WhatsApp bot', icon: 'fas fa-robot', desc: '', },
    //     { title: 'B2B Lead generation', icon: 'flaticon-award', desc: '', },
    //     { title: 'Mobile App Development', icon: 'flaticon-responsive', desc: '', },
    //     { title: 'UX design services', icon: 'flaticon-design', desc: '', },
    //     { title: 'Web application development', icon: 'flaticon-responsive', desc: '', },
    //     { title: 'E-commerce development', icon: 'flaticon-project-1', desc: '', },
    // ]
    useEffect(() => {
        getData()
    }, [])


    const getData = () => {


        var config = {
            method: 'get',
            url: url + '/solutions/',
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

    console.log({ data })

    return (
        <>
            {Loading ?
                <Loader />
                :

                <main>
                    <BreadCrumb heading={'Solutions'} />

                    <section className="service-wrap-layout6 section-padding-md bg-color-light">
                        <div className="container">
                            <div className="section-heading heading-dark heading-layout1">
                                <h2 className="heading-main-title">{data.heading}</h2>
                                <p className="heading-paragraph">{data.description}</p>
                            </div>
                            <div className="row">
                                {data.subsolution.map((item, idx) => {
                                    console.log(item); return (
                                        <div className="col-lg-4 col-sm-6 col-12  ">
                                            <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-100">
                                                <div className="service-box-layout3">
                                                    <div className={`item-icon ${idx % 2 === 0 ? 'california' : 'emerald'}`}>
                                                        <img src={url + item.icon} style={{ height: '4.5rem' }} alt="" />
                                                    </div>
                                                    <div className="item-content">
                                                        <h3 className="item-title"><a href="service-details.html">{item.heading}</a></h3>
                                                        <p>{item.description}</p>
                                                        {/* <a href="service-details.html" className="btn-text">Read More<i className="flaticon-next" /></a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                )}



                            </div>
                        </div>
                    </section >
                </main>
            }
        </>
    )
}

export default Solution