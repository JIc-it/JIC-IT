import React, { useEffect } from 'react'
import { useState } from 'react'
import BreadCrumb from '../../Components/UiComponents/BreadCrumb'
import axios from "axios";
import { url } from '../../Common/Config';
import Loader from '../../Components/Loader/Loader';

const Stacks = () => {
    const [activeTab, setactiveTab] = useState(0)
    const [data, setdata] = useState({})
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {


        var config = {
            method: 'get',
            url: url + '/stacks/',
            headers: {}
        };

        await axios(config)
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
        <>
            {!Loading ?
                <>
                    <BreadCrumb heading={'Stack'} />
                    <section className="feature-wrap-layout10 section-padding-md">
                        <div className="container">
                            <div className="section-heading heading-dark heading-layout2 ">
                                <h2 className="heading-main-title ">{data.heading}</h2>
                                <p className="heading-paragraph">{data.description}</p>
                            </div>
                            <div className="row feature-box-layout10">
                                <ul className="col-xl-12 col-12 nav nav-tabs tab-nav-list">
                                    <div className="row">

                                        {data.substack?.map((item, idx) => (
                                            <div class="col-lg-4 col-md-6 col-12 has-animation active-animation">
                                                <div class="translate-bottom-75 opacity-animation transition-150 transition-delay-100">
                                                    <div class="service-box-layout6">
                                                        <div class="item-icon">
                                                            <img src={url + item.icon} alt="" />
                                                        </div>
                                                        <h3 class="item-title"><a>{item.heading}</a></h3>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        ))}
                                    </div>
                                </ul>
                                {/* <div className="col-xl-3 tab-content">
                            {data.map((item, idx) => (
                                <div className={`tab-pane fade ${activeTab === idx ? 'show active' : ''}`} id={`nav-${idx}`}>
                                    <div className='row p-4'>
                                        <div className='col-12 row align-items-center' style={{ color: item.theme }}>
                                            <i className={item.icon} style={{ fontSize: '3rem' }} />
                                            <h3 className='m-0 pl-3'>{item.title}</h3>
                                        </div>
                                        <div className="col-12">
                                            <p className='mt-4'>
                                                
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div> */}
                            </div>
                        </div>
                    </section>
                </>
                :
                <Loader />
            }
        </>
    )
}

export default Stacks