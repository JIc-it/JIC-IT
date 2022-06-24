import React from "react";

const ScrollTop = () => {
  return (
    <a
      // href="#main_content"
      // data-type="section-switch"
      style={{ color: "#fff" }}
      className="return-to-top"
      onClick={(e) => {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <i className="fas fa-angle-double-up" />
    </a>
  );
};

export default ScrollTop;
