import React, { useEffect } from "react";

import descriptions from "../../descriptions";

const SiteLocation = () => {
  useEffect(() => {
    document.title = "Site Location";
  });
  return (
    <div id="service-pages">
      <div id="service-img" className="SL-header-img"></div>

      <div id="each-service-info">
        <div id="about-service">
          <h1>Site Location</h1>
          {descriptions[3].desc.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
        </div>
        <div id="each-service-img-container">
          <div id="each-service-img" className="SL-body-img"></div>
        </div>
      </div>
    </div>
  );
};

export default SiteLocation;
