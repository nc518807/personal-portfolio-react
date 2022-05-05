import React from 'react'
import "./experience.css"
import { BsPatchCheck } from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have </h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icons"    />
              <div>
              <h4>HTML5</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icons" />
              <div>
              <h4>HTML5</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icons" />
              <div>
              <h4>CSS3</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icons" />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icons" />
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icons" />
              <div>
              <h4>React Js</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* end frontend */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">

            <article className='experience__details'>
              <BsPatchCheck className="experience__details-icons" />
              <div>
              <h5>Laravel</h5>
              <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className="experience__details-icons" />                       
              <div>
              <h5>MySQL</h5>
              <small className='text-light' >basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className="experience__details-icons" />
             <div>
             <h5>Mongo Db</h5>
              <small className='text-light'>basic</small>
             </div>
            </article>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Experience