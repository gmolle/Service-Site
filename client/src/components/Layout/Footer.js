import React from 'react'

const Footer = () => {

  const scrolltop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div id="footer-container">
      <div id="open-hours">
        <h3>Our Hours</h3>
        <div className="days">
          <p>Sunday</p>
          <p>Monday</p>
          <p>Tuesday</p>
          <p>Wednesday</p>
          <p>Thursday</p>
          <p>Friday</p>
          <p>Saturday</p>
        </div>
        <div className="hours">
          <p>Closed</p>
          <p>9AM - 5PM</p>
          <p>9AM - 5PM</p>
          <p>9AM - 5PM</p>
          <p>9AM - 5PM</p>
          <p>9AM - 5PM</p>
          <p>Closed</p>
        </div>
      </div>
      <div id="locations">
        <h3>Locations</h3>
        <div className="location-addresses">
          <p>123 North St. New York, NY</p>
          <p>123 North St. New York, NY</p>
        </div>
      </div>
      <div id="contact-footer">
        <h3>Contact</h3>
        <div className="contact-info">
          <p>Phone: 555-555-5555</p>
          <p>Email: test@gmail.com</p>
        </div>
      </div>
      <div id="copyright">
        <p>&copy; Construction 2020. All rights reserved.</p>
      </div>
      <div id="scroll-top" onClick={scrolltop} >
        <i className="fas fa-arrow-up"></i>
      </div>
    </div>
  )
}

export default Footer;