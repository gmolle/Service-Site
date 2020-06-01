import React, { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    document.title = 'About Us'
  })

  return (
    <div id="about-page">
      <div id="about-header"></div>
      <div id="about-info">
        <div id="story">
          <h1>The Story Of Integrity Construction</h1>
          <p>Intengrity Construction was founded in 1985 with the belief that everyone deserves a quality built home no matter the budget. While families have many choices when it comes to building their dream home, Integrity Construction values their time and input.</p>
          <p>When you choose Integrity Construction to build your dream home you will work with an experienced design team and a detailed construction team. We value your input and time and will include you in every aspect of the construction.</p>
          <p>At your first meeting with our team we will thoroughly evaulate your needs and wants in your new home. Our expert builders will help you choose the home plan that best suits your family's needs. Our design team will explain all the options available to you.</p>
          <p>Integrity Construction also offers several other services including, but not limited to, Site Location, Plumbing, Facility Maintenance, Electrical Contractors, and Construction Mangagement. Please call us so that we can discuss what the experienced team at Integrity Construction can do for you.</p>
        </div>
        <div id="img-container">
          <div id="img"></div>
        </div>
      </div>
    </div>
  )
}


export default About;