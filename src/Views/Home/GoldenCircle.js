import React from "react";
import GoldenCircleComponent from "../../Components/UiComponents/GoldenCircleComponent";

const GoldenCircle = () => {
  return (
    <section className="team-wrap-layout2 section-padding-md">
      <div className="container">
        <div className="section-heading heading-dark heading-layout4">
          <h2 className="heading-main-title">Our Golden Circle Method </h2>
          <p className="heading-paragraph">
            The technological index binds levelling, perfecting, and
            assimilating our ideas to the global market. It entails the solution
            to realize what the people need and deliver the services they need.
          </p>
        </div>
        <div className="row">
          <GoldenCircleComponent title={'WHY'} />
          <GoldenCircleComponent title={'HOW'} />
          <GoldenCircleComponent title={'WHAT'} />
        </div>
      </div>
    </section>
  );
};

export default GoldenCircle;
