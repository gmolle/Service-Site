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
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id temporibus aperiam delectus aliquid fugit voluptatum maxime minus dignissimos dolorem dolorum?"
          link="/about"
          linkText="About Us"
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={200}>
        <InfoSections
          id={2}
          title="Our Services"
          desc="At (Company Name) we offer a wide variety of services. From electrical work to plumbing all the way to site location. We offer everything you need and much more."
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
