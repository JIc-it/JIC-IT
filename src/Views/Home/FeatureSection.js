import React from "react";
import Vector from "../../Assets/feature2.png";
import Vector2 from "../../Assets/illustration27.png";
import Vector3 from "../../Assets/illustration22.png";

const FeatureSection = () => {
  return (
    <>
      <section className="feature-wrap-layout5 overflow-hidden section-padding-md" >
        <div className="container">
          <div id='Feacture1' className="row gutters-50 anchor" >
            <div  className="col-lg-6 order-lg-3 col-12 has-animation active-animation">
              <div className="feature-box-layout1">
                <div className="translate-right-75 opacity-animation transition-150 transition-delay-50">
                  <img src={Vector} alt="Feature" />
                </div>
              </div>
            </div>
            <div  className="col-lg-6 order-lg-2 col-12 d-flex align-items-center justify-content-center has-animation active-animation">
              <div className="feature-box-layout1">
                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-100">
                  <h3 className="item-title">
                    Instant digital commerce enhancement for you
                  </h3>
                </div>
                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-500">
                  <p>
                    Achieve productive business growth through instant digital
                    commerce enhancement.
                  </p>
                </div>
                <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-900">
                  <ul className="list-layout1">
                    {data.map((item) => (
                      <li>
                        <h4 className="inner-item-title">{item.title}</h4>
                        <p>{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-wrap-layout5 overflow-hidden" >
        <div className="container">
          <div className="row gutters-50">
            <div id='Feacture2' className="col-lg-6 has-animation active-animation anchor" >
              <div className="translate-left-75 opacity-animation transition-200 transition-delay-10">
                <div className="feature-box-layout5">
                  <div className="item-figure">
                    <img src={Vector2} alt="Feature" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center has-animation active-animation">
              <div className="feature-box-layout5">
                {/* <div className="sub-title">Web and Apps</div> */}
                <h2 className="item-title">
                  Get ratings and grow larger by developing your digital
                  platform
                </h2>
                <p>
                  Web development is an undeniable part of e-commerce to
                  attract, gain and retain your clients.
                </p>
                <ul className="list-layout1">
                  {data1.map((item) => (
                    <li
                      className={item.color}
                      style={!item.color ? { color: "#ff8c00" } : null}
                    >
                      <div className="item-icon">
                        <i className={item.icon} />
                      </div>
                      <div className="item-content">
                        <h3 className="list-item-title">{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div id='Feacture3' className="col-lg-6 order-lg-2 has-animation active-animation anchor" >
              <div className="translate-right-75 opacity-animation transition-150 transition-delay-10">
                <div className="feature-box-layout5">
                  <div className="item-figure">
                    <img src={Vector3} alt="Feature" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1 d-flex align-items-center justify-content-center has-animation active-animation">
              <div className="feature-box-layout5">
                <h2 className="item-title">
                  The world of Apps for unlimited opportunities
                </h2>
                <p>
                  Let them visit and scroll your products from anywhere! With
                  our web application services, you can take your business to a
                  different level with direct customer engagement letting them
                  reach you anywhere. Your audience gets to know your best
                  offers, trending products and festive/special day bonuses,
                  just with a single click.
                </p>
                <ul className="list-layout2">
                  {data2.map((item, idx) => (
                    <li
                      className={
                        idx % 2 == 0
                          ? "color-torch-red"
                          : "color-mountain-meadow"
                      }
                    >
                      <h3 className="list-item-title">{item.title}</h3>
                      <p>{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
const data = [
  {
    title: "No turning back once you have your digital channel! ",
    desc: "We build you a direct-to-customer channel for digital customer interaction and engagement. ",
  },
  {
    title: "Handle the complexities of direct channels ",
    desc: "We present you with the platforms that support both digital and physical sales along with commerce channels for constant availability and operational proficiency. ",
  },
  {
    title: "Reforming the offerings for novel revenue paths ",
    desc: "Gather and analyse data for understanding customer priorities and ideals to apply the insights for unlocking novel revenue streams. ",
  },
];
const data1 = [
  {
    title: "Impressive and responsive designs ",
    color: "",
    icon: "flaticon-responsive-design",
    desc: "Sell it per click! Our impressive and responsive designs can make your audience instantly buy your product. How do your want to get presented? Let us know. ",
  },
  {
    title: "Get the key to traffic ",
    color: "color-radical-red",
    icon: "flaticon-idea",
    desc: "Make them chase you! Generate more visitors by understanding what the audience really wants. The right keyword work wonders for you! ",
  },
  {
    title: "Take it to a global level ",
    color: "color-dodger-blue-2",
    icon: "flaticon-chart",
    desc: "We let you gain an explosive global market by boosting your brand value. You can take your business to a global scale with enhanced sales and revenue. ",
  },
];

const data2 = [
  {
    title: "Waiting and willing ",
    desc: "Our research identifies the customer needs precisely and promotes your application before it gets launched. Brand awareness and product introduction in the promotion keep the audience waiting for the launch. The pre-launch promotions can surprise both your sales and revenue. ",
  },
  {
    title: "Acquisition and momentum ",
    desc: "Your possibilities are limitless with the user acquisition strategy. The application can gain plenty of downloads and reviews taking it to higher ranks on the platforms. ",
  },
  {
    title: "Retention ",
    desc: "The retention stage will intrigue your audience with exciting promotion tactics and let new customers make action with your service.  ",
  },
];
