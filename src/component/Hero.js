import React from 'react'
import './Hero.css'
import heroimg from '../assets/hero.avif'

function Hero() {
  return (
<section className="hero">
    <div className='hero-content'>
    <h1>Harishankar</h1>
    <h2 className="title">Front End developer</h2>
    <p>Aspiring Front End developer with a interest in React.js.
Proficient in HTML, CSS, JavaScript, Figma and React.js.
Eager to launch a career in software development and
offer innovative solutions to real-world problems. Strong
problem-solving skills and a passion for learning.
Seeking roles as a React.js developer to enhance skills
and make a meaningful impact in the tech industry.</p>
    </div>
    <div>
    <img src={heroimg} alt="Kevin Rush working on laptop" className="hero-image" />
    </div>
</section>
  )
}

export default Hero