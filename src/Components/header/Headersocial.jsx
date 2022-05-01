import React from 'react'
import {AiFillLinkedin,AiFillGithub,AiFillTwitterCircle} from "react-icons/ai"

const Headersocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com" target="_blank"><AiFillLinkedin/></a>
        <a href="https://www.github.com" target="_blank"><AiFillGithub/></a>
        <a href="https://www.twitter.com" target="_blank"><AiFillTwitterCircle/></a>
    </div>
  )
}

export default Headersocial