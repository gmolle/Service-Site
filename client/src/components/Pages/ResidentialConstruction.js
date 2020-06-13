import React, { useEffect } from "react";

import descriptions from "../../descriptions";

const ResidentialConstruction = () => {
  useEffect(() => {
    document.title = "Residential Construction";
  });
  return (
    <div id="service-pages">
      <div id="service-img" className="RC-header-img"></div>

      <div id="each-service-info">
        <div id="about-service">
          <h1>Residential Construction</h1>
          {descriptions[5].map((description, index) => (
            <p key={index}>{description}</p>
          ))}
        </div>
        <div id="each-service-img-container">
          <div id="each-service-img" className="RC-body-img"></div>
        </div>
      </div>
    </div>
  );
};

export default ResidentialConstruction;
