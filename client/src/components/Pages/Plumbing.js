import React, { useEffect } from "react";

import descriptions from "../../descriptions";

const Plumbing = () => {
  useEffect(() => {
    document.title = "Plumbing";
  });
  return (
    <div id="service-pages">
      <div id="service-img" className="P-header-img"></div>

      <div id="each-service-info">
        <div id="about-service">
          <h1>Plumbing</h1>
          {descriptions[4].map((description, index) => (
            <p key={index}>{description}</p>
          ))}
        </div>
        <div id="each-service-img-container">
          <div id="each-service-img" className="P-body-img"></div>
        </div>
      </div>
    </div>
  );
};

export default Plumbing;
