import React from 'react'
import "./about.css"
import ME from '../../asset/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>

        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiance</h5>
              <small>1+ years </small>

            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>0 </small>

            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>projects </h5>
              <small> 10</small>

            </article>
 
             <div>
              <p>
                 Hi, this is me and i nthis beautiful days i would like to thank almighty god for giving me chances to enjoy on this beautiful creatuvity
              </p>

              <a href='#contact' className='btn btn-primary'>Let's Talk</a>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About