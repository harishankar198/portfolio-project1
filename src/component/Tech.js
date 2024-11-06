import React from 'react'
import './Tech.css'
import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiAdobephotoshop } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";



function Tech() {
  return (
    <div>
    <h2 className='ttitle'>Technologies</h2>
    <div className='tech'>
       <li  className='tech1'><FaReact size={40}/></li>
       <li className='tech6' ><FaCss3Alt size={40} /></li>
       <li className='tech3'><FaBootstrap size={40}/></li>
       <li className='tech4'><FaGithub size={40}/></li>
       <li className='tech5'><SiAdobephotoshop size={40}/></li>
       <li className='tech2'><DiJavascript size={40} /></li>
       
    </div>
    </div>
  )
}

export default Tech;

