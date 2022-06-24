import React from "react";

const TextButtonWithArrow = ({ url, text, ref, handleClick }) => {
  return (
    <a href={url} class="btn-text mb-2" onClick={() => handleClick(ref)}>
      {text}
      <i class="flaticon-next"></i>
    </a>
  );
};

export default TextButtonWithArrow;
