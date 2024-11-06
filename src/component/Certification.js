import React from 'react'
import './Certification.css'

function Certification() {
  return (
    <div>
        <center><h2 className='cert-title'>Certification</h2></center>
        <div className='cert-main'>
        <div></div>
        <div></div>
        <div>
            <p>Uniq Technologies</p>
            <p>Jan24 - May24</p>
            </div>  
            <div>
                <h5>Front End Devloper -React</h5>
                <p className='cert-p'> recently completed a comprehensive course in front-end development,
                gaining skills in HTML, CSS, and JavaScript, along with popular frameworks like React. 
                This training equipped me with the ability to build responsive, user-friendly web applications,
                and honed my eye for design and functionality. I'm now confident in my ability to create 
                engaging and efficient web interfaces.</p>
                <div className='cert-tech'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </div>
                
            </div>
            <div></div>
        </div>

    </div>
  )
}

export default Certification