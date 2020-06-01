import React from 'react'
import { Link } from 'react-router-dom';

const ContactImage = (props) => {

  const { title, desc, linkText } = props

  return (
    <div id="contact-us-image-container">
      <div className="contact-text">
        <h2>{title}</h2>
        <p>{desc}</p>
        <Link to='/contact'>{linkText}</Link>
      </div>
    </div>
  )
}

export default ContactImage;