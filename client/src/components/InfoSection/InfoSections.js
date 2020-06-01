import React from 'react'
import { Link } from 'react-router-dom'

const InfoSections = (props) => {

  const { id, desc, title, link, linkText } = props;
  return (
    <div className="info-sections" id={`service${id}`}>
      <div className="info-img" id={`info-img-${id}`}></div>
      <div className="info-text">
        <h3>{title}</h3>
        <p>{desc}</p>
        <Link to={link}>{linkText}</Link>
      </div>
    </div>
  )
}

export default InfoSections;