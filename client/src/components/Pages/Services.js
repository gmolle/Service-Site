import React, { useEffect } from 'react'
import ServiceSection from '../ServiceSection/ServiceSection'

const Services = () => {
  useEffect(() => {
    document.title = 'Our Services'
  })

  return (
    <div id='service-page'>
      <h1>Our Services</h1>
      <ServiceSection />
    </div>
  )
}

export default Services;