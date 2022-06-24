import React from "react";

const ContactSection = () => {
  return (
    <section className="contact-wrap-layout1 section-padding-md bg-color-light">
      <div className="container">
        <div className="row gutters-50">
          <div className="col-xl-5 col-lg-6 col-12">
            <div className="contact-box-layout1 has-animation">
              <div className="translate-bottom-50 opacity-animation transition-100 transition-delay-100">
                <h2 className="item-title">How May We Help You!</h2>
              </div>
              <div className="translate-bottom-50 opacity-animation transition-100 transition-delay-400">
                <p>
                  Grursus mal suada faci lisis Lorem ipsum consectetur elit.
                </p>
              </div>
              <form className="contact-form-box" id="contact-form">
                <div className="row gutters-20">
                  <div className="col-xl-6 form-group">
                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-400">
                      <input
                        type="text"
                        placeholder="Name *"
                        className="form-control"
                        name="first_name"
                        data-error="Phone field is required"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-xl-6 form-group">
                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-700">
                      <input
                        type="email"
                        placeholder="Email *"
                        className="form-control"
                        name="email"
                        data-error="Subject field is required"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-12 form-group">
                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1000">
                      <select className="select2" name="subject">
                        <option value={0}>Software Licencing</option>
                        <option value={1}>Single-user license</option>
                        <option value={2}>Multi-user license</option>
                        <option value={3}>Site license</option>
                        <option value={4}>Intellectual property</option>
                      </select>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-12 form-group">
                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1300">
                      <textarea
                        placeholder="Let us know what you need"
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
                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1700">
                      <button type="submit" className="btn-fill btn-gradient">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-response" />
              </form>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-12 d-flex align-items-center">
            <div className="contact-box-layout1 has-animation">
              <div className="translate-right-75 transition-150 opacity-animation transition-delay-10">
                <div className="item-figure">
                  <img
                    src="media/illustration/illustration21.png"
                    alt="Illustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
