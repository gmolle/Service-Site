import React from "react";
import InfoSections from "../InfoSection/InfoSections";

import ScrollAnimation from "react-animate-on-scroll";

const InfoSection = () => {
  return (
    <div id="info-section">
      <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
        <InfoSections
          id={1}
          title="About Our Company"
          desc="Intengrity Construction was founded in 1985 with the belief that everyone deserves a quality built home no matter the budget. While families have many choices when it comes to building their dream home, Integrity Construction values their time and input."
          link="/about"
          linkText="About Us"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={200}>
        <InfoSections
          id={2}
          title="Our Services"
          desc="At Integrity Construction we offer a wide variety of services. From electrical work to plumbing all the way to site location. We offer everything you need and much more."
          link="/services"
          linkText="View Services"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={400}>
        <InfoSections
          id={3}
          title="Have A Question?"
          desc="Want to know our pricing? Have a question about one of our services? Have an issue from a past project with us? Please don't be afraid to send us a question and we will be sure to get back to you."
          link="/contact"
          linkText="Contact Us"
        />
      </ScrollAnimation>
    </div>
  );
};

export default InfoSection;
