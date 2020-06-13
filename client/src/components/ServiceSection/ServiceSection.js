import React from "react";
import ServiceSections from "./ServiceSections";

import ScrollAnimation from "react-animate-on-scroll";

const ServiceSection = () => {
  return (
    <div className="service-wrapper">
      <div id="services-section">
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <ServiceSections
            id={1}
            title="Construction Management"
            desc="We have some of the world's best construction managers that will take charge in any of your construction needs. From start to finish of the project, our construction managers will ensure that the project runs smoothly and will be completed in a timely manner."
            link="/services/construction-management"
            linkText="Read More"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={100}>
          <ServiceSections
            id={2}
            title="Facility Maintenance"
            desc="Does your home or office need repairs? Is your office parking lot old and falling apart? Our facility maintenance team is the perfect team for the job. We have been repairing facilities for over 30 years."
            link="/services/facility-maintenance"
            linkText="Read More"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={200}>
          <ServiceSections
            id={3}
            title="Electrical Contrators"
            desc="Our electrians go through many hours of rigorous testing to become an electrician at our company. From the smallest electrical problems to the biggest, we've got you covered."
            link="/services/electrical-contractors"
            linkText="Read More"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <ServiceSections
            id={4}
            title="Site Location"
            desc="Deciding where to build your office or dream house is one of the toughest decisions you will make during the entire process of construction. We will assist you in finding the best site for all your building needs"
            link="/services/site-location"
            linkText="Read More"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={100}>
          <ServiceSections
            id={5}
            title="Plumbing"
            desc="Whether you need a new drain for your sink or new plumbing for your whole house, we have the plumbers you want for the job. With over 30 years of plumbing experience we will be sure to fix any problems you have."
            link="/services/plumbing"
            linkText="Read More"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={200}>
          <ServiceSections
            id={6}
            title="Residential Construction"
            desc="Planning of builidng your dream home? How about a summer vacation home? We will work with you to design and build your dream home from start to finish."
            link="/services/residential-construction"
            linkText="Read More"
          />
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default ServiceSection;
