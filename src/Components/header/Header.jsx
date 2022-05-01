import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../asset/me.png'
import Headersocial from './Headersocial'

const Header = () => {
  return (
    <header>

      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Nagen Chaudhary</h1>
        <h5 className='text-light'>
          Front-End Developer
        </h5>
        <CTA />
        <Headersocial />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header