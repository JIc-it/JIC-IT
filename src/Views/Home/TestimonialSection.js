import React from "react";

const TestimonialSection = () => {
  return (
    <section className="testimonial-wrap-layout2 section-padding-md bg-color-accent2">
      <div className="container">
        <div className="section-heading heading-dark heading-layout1 has-animation">
          <h2 className="heading-main-title">Clients Testimonials</h2>
          <div className="heading-icon">
            <svg className="dash-left" width={100} height={20}>
              <g fill="none" strokeWidth={4}>
                <path
                  className="dashed1"
                  stroke="rgba(90, 73, 248, 0.5)"
                  strokeDasharray="5, 5"
                  d="M5 20 l215 0"
                />
                <path
                  className="dashed2"
                  stroke="white"
                  strokeDasharray="5, 5"
                  d="M5 20 l215 0"
                />
              </g>
            </svg>
            <i className="flaticon-rocket" />
            <svg className="dash-right" width={100} height={20}>
              <g fill="none" strokeWidth={4}>
                <path
                  className="dashed1"
                  stroke="rgba(90, 73, 248, 0.5)"
                  strokeDasharray="5, 5"
                  d="M5 20 l215 0"
                />
                <path
                  className="dashed2"
                  stroke="white"
                  strokeDasharray="5, 5"
                  d="M5 20 l215 0"
                />
              </g>
            </svg>
          </div>
          <p className="heading-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting has
            been the industry's standard dummy text ever since
          </p>
        </div>
        <div
          className="rc-carousel nav-control-layout1"
          data-loop="true"
          data-items={3}
          data-margin={10}
          data-autoplay="false"
          data-autoplay-timeout={5000}
          data-smart-speed={700}
          data-dots="false"
          data-nav="true"
          data-nav-speed="false"
          data-r-x-small={1}
          data-r-x-small-nav="true"
          data-r-x-small-dots="false"
          data-r-x-medium={1}
          data-r-x-medium-nav="true"
          data-r-x-medium-dots="false"
          data-r-small={1}
          data-r-small-nav="true"
          data-r-small-dots="false"
          data-r-medium={2}
          data-r-medium-nav="true"
          data-r-medium-dots="false"
          data-r-large={2}
          data-r-large-nav="true"
          data-r-large-dots="false"
          data-r-extra-large={2}
          data-r-extra-large-nav="true"
          data-r-extra-large-dots="false"
        >
          <div className="testimonial-box-layout1">
            <div className="top-box">
              <div className="item-icon">
                <i className="flaticon-quote" />
              </div>
              <p>
                Grursus mal suada faci lisis to at Lorem at the at dolarorit
                moreametion to consectetur elit. To Vesti bulum at nec that.
              </p>
            </div>
            <div className="bottom-box">
              <div className="media">
                <img
                  src="media/testimonial/testimonial1.png"
                  alt="Testimonial"
                />
                <div className="media-body space-sm">
                  <h3 className="item-title">Robert Bruce</h3>
                  <div className="item-designation">Apps Developer</div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-box-layout1">
            <div className="top-box">
              <div className="item-icon">
                <i className="flaticon-quote" />
              </div>
              <p>
                Grursus mal suada faci lisis to at Lorem at the at dolarorit
                moreametion to consectetur elit. To Vesti bulum at nec that.
              </p>
            </div>
            <div className="bottom-box">
              <div className="media">
                <img
                  src="media/testimonial/testimonial2.png"
                  alt="Testimonial"
                />
                <div className="media-body space-sm">
                  <h3 className="item-title">Kate Kingston</h3>
                  <div className="item-designation">Web Designer</div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-box-layout1">
            <div className="top-box">
              <div className="item-icon">
                <i className="flaticon-quote" />
              </div>
              <p>
                Grursus mal suada faci lisis to at Lorem at the at dolarorit
                moreametion to consectetur elit. To Vesti bulum at nec that.
              </p>
            </div>
            <div className="bottom-box">
              <div className="media">
                <img
                  src="media/testimonial/testimonial1.png"
                  alt="Testimonial"
                />
                <div className="media-body space-sm">
                  <h3 className="item-title">Kate Kingston</h3>
                  <div className="item-designation">Web Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
