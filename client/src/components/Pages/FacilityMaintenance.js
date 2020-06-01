import React, { useEffect } from "react";

import descriptions from "../../descriptions";

const FacilityMaintenance = () => {
  useEffect(() => {
    document.title = "Facility Maintenance";
  });
  return (
    <div id="service-pages">
      <div id="service-img" className="FM-header-img"></div>

      <div id="each-service-info">
        <div id="about-service">
          <h1>Facility Maintenance</h1>
          {descriptions[1].desc.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
        </div>
        <div id="each-service-img-container">
          <div id="each-service-img" className="FM-body-img"></div>
        </div>
      </div>
    </div>
  );
};

export default FacilityMaintenance;
