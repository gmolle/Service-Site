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
          <h1>The Story Of ...</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi ex, est dignissimos quisquam, error illo deserunt accusamus sed dolores iure vel! Eveniet quod voluptatibus pariatur officia iure unde, maiores adipisci dolor. Dolore repudiandae incidunt consequatur earum molestias perferendis, quaerat sequi beatae laboriosam nihil. Itaque mollitia quam corporis alias voluptatem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi ex, est dignissimos quisquam, error illo deserunt accusamus sed dolores iure vel! Eveniet quod voluptatibus pariatur officia iure unde, maiores adipisci dolor. Dolore repudiandae incidunt consequatur earum molestias perferendis, quaerat sequi beatae laboriosam nihil. Itaque mollitia quam corporis alias voluptatem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi ex, est dignissimos quisquam, error illo deserunt accusamus sed dolores iure vel! Eveniet quod voluptatibus pariatur officia iure unde, maiores adipisci dolor. Dolore repudiandae incidunt consequatur earum molestias perferendis, quaerat sequi beatae laboriosam nihil. Itaque mollitia quam corporis alias voluptatem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi ex, est dignissimos quisquam, error illo deserunt accusamus sed dolores iure vel! Eveniet quod voluptatibus pariatur officia iure unde, maiores adipisci dolor. Dolore repudiandae incidunt consequatur earum molestias perferendis, quaerat sequi beatae laboriosam nihil. Itaque mollitia quam corporis alias voluptatem.</p>
        </div>
        <div id="img-container">
          <div id="img"></div>
        </div>
      </div>
    </div>
  )
}


export default About;