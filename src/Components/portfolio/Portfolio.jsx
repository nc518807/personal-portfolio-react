import React from 'react'
import "./portfolio.css"
import ME from '../../asset/portfolio1.jpg'
import IMG2 from '../../asset/portfolio2.jpg'
import IMG3 from '../../asset/portfolio3.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>
        My Recent works
      </h5>
      <h2>PortFolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">

             <img src={ME} alt="" />

          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://github.com' className='btn btn-primary'>Live-Demo</a>
            </div>
        </article>
        <article className="portfolio_item">
          <div className="porfolio_item-image">

             <img src={ME} alt="" />

          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://github.com' className='btn btn-primary'>Live-Demo</a>
            </div>
        </article>
        <article className="portfolio_item">
          <div className="porfolio_item-image">

             <img src={ME} alt="" />

          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://github.com' className='btn btn-primary'>Live-Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio