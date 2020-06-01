import React, { useEffect } from "react";

import descriptions from "../../descriptions";

const ConstructionManagement = () => {
  useEffect(() => {
    document.title = "Construction Management";
  });

  return (
    <div id="service-pages">
      <div id="service-img" className="CM-header-img"></div>

      <div id="each-service-info">
        <div id="about-service">
          <h1>Constuction Management</h1>
          {descriptions[0].desc.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
        </div>
        <div id="each-service-img-container">
          <div id="each-service-img" className="CM-body-img"></div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionManagement;
