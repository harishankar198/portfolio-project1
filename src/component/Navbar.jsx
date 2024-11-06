import React from 'react'
import logo from "../assets/logo.jpg"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import './Navbar.css'

function Navbar() {
  return (
   <nav className='navbar'>
    
    <div>
        <img className='img-logo' src={logo} alt='' />
        {/* <h1>HS</h1> */}
    </div>
    <div></div>
    <div></div>
    
    <navlist className='logo'>
        <a href='https://github.com/harishankar198/githubemc1'><navitem><FaGithub  size={25}/></navitem></a>
        <a href='https://www.linkedin.com/in/hari-shankar19'><navitem><FaLinkedin size={25}/></navitem></a>
        <a href='https://www.instagram.com/theshankar_19'><navitem><FaInstagram size={25} /></navitem></a>
    </navlist>
    
   </nav>
  )
}

export default Navbar