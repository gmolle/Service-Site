import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import InfoSection from "../InfoSection/InfoSection";
import ServiceSection from "../ServiceSection/ServiceSection";
import ContactImage from "../Layout/ContactImage";

const Home = () => {
  useEffect(() => {
    document.title = "Construction";
  });

  return (
    <div id="home-page">
      <div id="header-img">
        <div className="header-info">
          <h1>People, technology & Experience</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi animi
            assumenda natus eius illo? Est numquam corporis id tempora
            blanditiis.
          </p>
          <div className="header-links">
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>

      <div id="info-section-header">
        <h2>About Our Company</h2>
      </div>

      <InfoSection />

      <div className="service-header-wrapper">
        <div id="services-section-header">
          <h2>What We Do</h2>
        </div>
      </div>

      <ServiceSection />

      <ContactImage
        title="Have a Large Project?"
        desc="Do you have a project idea that would require a large team and a long time to complete? Reach out to us with your idea and we will try to bring that idea to life the best we can."
        linkText="Send a Message"
      />
    </div>
  );
};

export default Home;
