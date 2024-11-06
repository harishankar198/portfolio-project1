import './About.css'
import about from '../assets/About.jpg'

import React from 'react'

function About() {
  return (
    <div>
        <center><h2 className='title2'>About <span className='title1'>Me</span></h2></center>
        <div className='about'>
            <img className='aboutimg' src={about}/>
            <p className='aboutp'>I am a front-end developer with a passion for creating beautiful and user-friendly web applications. 
            With a strong foundation in HTML, CSS, and JavaScript, I specialize in modern front-end frameworks like React
             to build responsive, dynamic, and accessible websites. I focus on crafting intuitive user interfaces 
             and seamless user experiences, ensuring that my code is not only functional but also clean and maintainable.
              I’m constantly learning and keeping up with the latest web technologies to deliver innovative solutions.
               My goal is to bring ideas to life on the web and make the digital world a more enjoyable place for everyone.</p>
        </div>
    </div>
  )
}

export default About