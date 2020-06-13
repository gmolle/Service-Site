import React, { useEffect } from "react";

import descriptions from "../../descriptions";

const ElectricalContractors = () => {
  useEffect(() => {
    document.title = "Electrical Contractors";
  });
  return (
    <div id="service-pages">
      <div id="service-img" className="EC-header-img"></div>

      <div id="each-service-info">
        <div id="about-service">
          <h1>Electrical Contractors</h1>
          {descriptions[2].map((description, index) => (
            <p key={index}>{description}</p>
          ))}
        </div>
        <div id="each-service-img-container">
          <div id="each-service-img" className="EC-body-img"></div>
        </div>
      </div>
    </div>
  );
};

export default ElectricalContractors;
