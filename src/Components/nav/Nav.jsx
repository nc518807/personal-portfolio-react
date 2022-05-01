import React from 'react'
import "./nav.css"
import {AiOutlineHome,AiOutlineUser} from "react-icons/ai"
import {BiBook,BiMessageSquareDetail} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import { useState } from 'react'
const Nav = () => {
  const [activenav,setactivenav] = useState('#')

  return (
    <nav>
      <a href='#' onClick={()=>setactivenav('#')} className={activenav === '#'? 'active' : ''}><AiOutlineHome/> </a>
      <a href='#about' onClick={()=>setactivenav('#about') } className={activenav === '#about'? 'active':''}><AiOutlineUser/> </a>
      <a href='#experiance'onClick={()=>setactivenav('#experiance') } className={activenav==='#experiance'? 'active':''}><BiBook/> </a>
      <a href='#service' onClick={()=>setactivenav('#service')} className={activenav=='#service' ? 'active' :''}><RiServiceLine/> </a>
      <a href='#contact' onClick={()=>setactivenav('#contact')} className={activenav==='#contact' ? 'active' : ''}><BiMessageSquareDetail/> </a>
    </nav>
  ) 
}

export default Nav