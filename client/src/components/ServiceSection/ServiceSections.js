import React from 'react'
import { Link } from 'react-router-dom';

const ServiceSections = (props) => {

  const { id, title, desc, link, linkText } = props

  return (
    <div className="service">
      <div className="service-img">
        <div id={`service-img-${id}`} className="service-images"></div>
      </div>
      <div className="service-text">
        <h3>{title}</h3>
        <p>{desc}</p>
        <Link to={link}>{linkText}</Link>
      </div>
    </div>
  )
}

export default ServiceSections;