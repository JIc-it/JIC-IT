import React from "react";
import { Link } from 'react-router-dom'

const BreadCrumb = ({ heading }) => {
  return (
    <section id="page-banner" class="page-banner bg-gradient-layout6 has-animation ">

      <div class="container">
        <div class="breadcrumbs-area">
          <h1>{heading}</h1>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>{heading}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
