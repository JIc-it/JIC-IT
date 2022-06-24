import React from "react";

const ServiceCard = ({ title, description, svg, icon, theme }) => {
  return (
    <div className="col-lg-4 col-sm-6 col-12 masonry-item has-animation">
      <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-100">
        <div className="service-box-layout1">
          <div className={`icon-holder icon-bg-${theme}`}>
            <div className={`item-icon icon-color-${theme}`}>
              <i className={icon} />
            </div>

            {svg}
          </div>
          <h3 className="item-title">
            <a href="service-details.html">{title}</a>
          </h3>
          <p>{description.length > 200 && description.slice(0, 200)+'...'}</p>
          <a href="service-details.html" className="btn-text">
            Discover Now
            <i className="flaticon-next" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
