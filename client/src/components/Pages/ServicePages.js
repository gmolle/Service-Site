import React, { useEffect } from "react";

const ServicePages = (props) => {
  const { headerImage, service, bodyImage, desc } = props.info;

  useEffect(() => {
    document.title = `${service}`;
  });

  const headerUrl = require(`../../img/${headerImage}`);
  const bodyUrl = require(`../../img/${bodyImage}`);

  return (
    <div id="service-pages">
      <div
        id="service-img"
        style={{ backgroundImage: `url(${headerUrl})` }}
      ></div>

      <div id="each-service-info">
        <div id="about-service">
          <h1>{service}</h1>
          {desc.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
        </div>
        <div id="each-service-img-container">
          <div
            id="each-service-img"
            style={{ backgroundImage: `url(${bodyUrl})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ServicePages;
