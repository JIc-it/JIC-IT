import React from "react";

const Contact = () => {
  return (
    <section className="contact-wrap-layout3 section-padding-md-equal">
      <div className="container mt--100">
        <div className="box-bottom-margin mb--60">
          <div className="google-map"></div>
        </div>

        <div className="row gutters-50">
          <div className="col-lg-4 mb-5 has-animation ">
            <div className="single-item translate-left-75 opacity-animation transition-150 transition-delay-100">
              <div className="address-box-layout2">
                <div className="item-icon">
                  <i className="flaticon-mail" />
                </div>
                <div className="item-content">
                  <h3 className="item-title">Email &amp; Phone</h3>
                  <ul className="list-item">
                    <li>
                      <a href={`mailto:${Mail}`}>{Mail}</a>
                    </li>
                    <li>
                      <a href={`tel:+${Phone}`}>{Phone}</a>
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
                  <h3 className="item-title">Our Location</h3>
                  <ul className="list-item">
                    <li>{Address}</li>
                    {/* <li>+21 842 755 5575</li> */}
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
          <div className="col-lg-8 has-animation ">
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
                        data-error="Name field is required"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6 form-group">
                    <div className="translate-bottom-50 opacity-animation transition-100 transition-delay-1400">
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        name="email"
                        data-error="Email field is required"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-12 form-group">
                    <div className="translate-bottom-50 opacity-animation transition-100 transition-delay-1600">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="form-control"
                        name="subject"
                        data-error="Subject field is required"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-12 form-group">
                    <div className="translate-bottom-50 opacity-animation transition-100 transition-delay-1800">
                      <textarea
                        placeholder="Comment"
                        className="textarea form-control"
                        name="message"
                        id="form-message"
                        rows={7}
                        cols={20}
                        data-error="Message field is required"
                        required
                        defaultValue={""}
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-12 form-group mb-0">
                    <div className="translate-bottom-50 opacity-animation transition-100 transition-delay-2000">
                      <button
                        type="submit"
                        className="btn-fill btn-gradient disabled"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-response" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
export const Address =
  <p>
    Kuwait City, Qibla Block No.15,
    Ali Al Salem Street,
    Adel Tower, Floor No. 7, Door No. 2
    <br />
    Kuwait
  </p>

// `TK Business Arcade, 165B/35, 31, Residence Line, Nr. Changapuzha Park, Edappally, 682026, Ernakulam, Kerala, India`
export const Phone = "+96566305306";
export const Mail = "info@jicitsolution.com";
