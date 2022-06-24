import React from "react";

const ProgressSection = () => {
  return (
    <section className="progress-wrap-layout1 bg-gradient-layout2">
      <div
        className="progress-inner-wrap bg-position-center bg-no-repeat bg-size-cover parallaxie bg-size-cover bg-no-repeat bg-position-center"
        data-bg-image="media/element/element1.png"
      >
        <div className="container zindex-level-2">
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="progress-box-layout1">
                <h2 className="counting-text counter" data-num={845}>
                  845
                </h2>
                <div className="item-label">Happy Clients</div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="progress-box-layout1">
                <h2 className="counting-text counter" data-num={1240}>
                  1240
                </h2>
                <div className="item-label">Projects Done</div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="progress-box-layout1">
                <h2 className="counting-text counter" data-num={15420}>
                  15420
                </h2>
                <div className="item-label">Days Of Work</div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="progress-box-layout1">
                <h2 className="counting-text counter" data-num={67}>
                  67
                </h2>
                <div className="item-label">Award Winner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
