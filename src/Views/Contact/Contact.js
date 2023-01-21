import React, { useContext, useEffect, useState } from "react";
import { url } from "../../Common/Config";
import axios from "axios";
import { Context } from "../../Common/Context";
import Loader from "../../Components/Loader/Loader";
import FormErrorMessage from "../../Components/UiComponents/FormErrorMessage";
import { validateEmail } from "../../Common/Validation";

const Contact = () => {
  const { contactData, ContactPageLoading } = useContext(Context)
  const [data, setdata] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, seterrors] = useState(false)
  const [mailValidationError, setmailValidationError] = useState(false)
  const [submitBtnDisabled, setsubmitBtnDisabled] = useState(false)
  const [responseMessage, setresponseMessage] = useState('')

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    setsubmitBtnDisabled(true)





    if (!data.email || !data.message || !data.name || !data.subject) {
      seterrors(true)
      setsubmitBtnDisabled(false)
      return
    } else {
      seterrors(false)
    }

    if (data.email) {
      if (!validateEmail(data.email)) {
        // alert('djkndjjk')
        setsubmitBtnDisabled(false)
        setmailValidationError(true)
        return
        // alert('bvjkfcjh')
      } else {
        setsubmitBtnDisabled(false)
        setmailValidationError(false)
      }
    }


    if (!mailValidationError && !errors) {

      let formdata = new FormData();
      formdata.append('name', data.name);
      formdata.append('email', data.email);
      formdata.append('subject', data.subject);
      formdata.append('comment', data.message);

      // for (var pair of formdata.entries()) {
      //   console.log(pair[0] + ', ' + pair[1]);
      // }
      // return

      var config = {
        method: 'post',
        url: url + '/mail/',
        headers: {},
        data: formdata,
      };



      axios(config)
        .then(function (response) {
          console.log(response.data)
          setsubmitBtnDisabled(false)
          setresponseMessage(response.data.Message)
          setdata({ name: '', email: '', subject: '', message: '' })
          setTimeout(() => {
            setresponseMessage('')
          }, 5000);


        })
        .catch(function (error) {
          console.log(error);
          setsubmitBtnDisabled(false)
        });
    }
  }

  return (
    <>
      {ContactPageLoading ?
        <Loader />
        :
        <section className="contact-wrap-layout3 section-padding-md-equal">
          <div className="container mt--100">
            <div className="box-bottom-margin mb--60">
              <div className="google-map"></div>
            </div>

            <div className="row gutters-50">
              <div className="col-lg-6 mb-5  ">
                <div className="single-item translate-left-75 opacity-animation transition-150 transition-delay-100">
                  <div className="address-box-layout2">
                    <div className="item-icon">
                      <i className="flaticon-mail" />
                    </div>
                    <div className="item-content">
                      <h3 className="item-title">Email </h3>
                      <ul className="list-item">
                        <li>
                          <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-item translate-left-75 opacity-animation transition-150 transition-delay-600">
                  <div className="address-box-layout2">
                    <div className="item-icon">
                      <i className="flaticon-placeholder" />
                    </div>
                    <div className="item-content">
                      <h3 className="item-title ">Our Locations</h3>
                      <ul className="list-item">
                        <li>{contactData.address}</li>
                        <p>

                          <a href={`tel:+${contactData.phone}`}>{contactData.phone}</a>,
                          <a href={`tel:+${918714009728}`}>{`+918714009728`}</a>,
                          
                          <a href={`tel:+${918714009729}`}>{`+918714009729`}</a>
                        </p>
                      </ul>


                      <hr />
                      <ul className="list-item">
                        <li>{Address}</li>
                        <a href={`tel:+${Phone}`}>{Phone}</a>
                      </ul>
                    </div>

                  </div>
                </div>
                {/* <div className="single-item translate-left-75 opacity-animation transition-150 transition-delay-1100">
              <div className="address-box-layout2">
                <div className="item-icon">
                  <i className="flaticon-share" />
                </div>
                <div className="item-content">
                  <h3 className="item-title">Get In Touch</h3>
                  <ul className="list-item">
                    <li>yourweb@gmail.com</li>
                    <li>+21 842 755 5575</li>
                  </ul>
                </div>
              </div>
            </div> */}
              </div>
              <div className="col-lg-6  ">
                <div className="contact-box-layout3">
                  <form
                    className="contact-form-box"
                    id="contact-form"
                    noValidate="true"
                  >
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <div className="translate-bottom-50 opacity-animation transition-100 transition-delay-1200">
                          <input
                            type="text"
                            placeholder="Name"
                            className="form-control"
                            name="name"
                            onChange={handleChange}
                            value={data.name}
                            data-error="Name field is required"
                            required
                          />
                          {(!data.name && errors) &&
                            <FormErrorMessage field={'Name'} message={'field is required'} />
                          }
                        </div>
                      </div>
                      <div className="col-md-6 form-group">
                        <div className="translate-bottom-50 opacity-animation transition-100 transition-delay-1400">
                          <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            data-error="Email field is required"
                            required
                          />
                          {(!data.email && errors) &&
                            <FormErrorMessage field={'Email'} message={'field is required'} />
                          }
                          {(mailValidationError) &&
                            <FormErrorMessage field={''} message={'Invalid Email'} />
                          }

                        </div>
                      </div>

                      <div className="col-12 form-group">
                        <div className="translate-bottom-50 opacity-animation transition-100 transition-delay-1600">
                          <input
                            type="text"
                            placeholder="Subject"
                            className="form-control"
                            name="subject"
                            onChange={handleChange}
                            value={data.subject}
                            data-error="Subject field is required"
                            required
                          />
                          {(!data.subject && errors) &&
                            <FormErrorMessage field={'Subject'} message={'field is required'} />
                          }
                        </div>
                      </div>

                      <div className="col-12 form-group">
                        <div className="translate-bottom-50 opacity-animation transition-100 transition-delay-1800">
                          <textarea
                            placeholder="Message"
                            className="textarea form-control"
                            name="message"
                            onChange={handleChange}
                            value={data.message}
                            id="form-message"
                            rows={7}
                            cols={20}
                            data-error="Message field is required"
                            required
                            defaultValue={""}
                          />
                          {(!data.message && errors) &&
                            <FormErrorMessage field={'Message'} message={'field is required'} />
                          }
                        </div>
                      </div>

                      <div className="col-12 form-group mb-0">
                        <div className="translate-bottom-50 opacity-animation transition-100 transition-delay-2000">
                          <button
                            type="button"
                            className="btn-fill btn-gradient disabled"
                            disabled={submitBtnDisabled}
                            onClick={handleSubmit}
                          >
                            Send Message
                          </button>


                        </div>

                      </div>
                      <div className="col-3 d-flex align-items-center">
                        <p className="mb-0">{responseMessage}</p>
                      </div>

                    </div>
                    <div className="form-response" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default Contact;
export const Address =
  <p className="mb-0">
    Kuwait City, Qibla Block No.15,
    Ali Al Salem Street,
    Adel Tower, Floor No. 7, Door No. 2
    <br />
    Kuwait
  </p>

// `TK Business Arcade, 165B/35, 31, Residence Line, Nr. Changapuzha Park, Edappally, 682026, Ernakulam, Kerala, India`
export const Phone = "+96566305306";
export const Mail = "info@jicitsolution.com";
