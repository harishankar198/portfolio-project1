import React from 'react'
import './Project.css'
import ecommerce from '../assets/e-commerce.jpeg'
import portfolio from '../assets/portfolio.jpeg'

function Project() {
    return (
        <div className='pro'>
            <h2 className='pro-title'>Project</h2>
        <div>
            <div className='pro-main'>
                <div></div>
                <div>
                    <img className='pro-img1' src={ecommerce} />
                </div>
                <div className='pro-text'>
                    <h5>E-Commerce Website</h5>
                    <p className='pro-p'>A fully functional e-commerce website with features like product listing,
                        shopping cart, and user authentication.</p>
                    <div className='pro-tech'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                    </div>
                </div>
                <div></div>
                </div>

              <div>
             <div className='pro-main'>
                    <div></div>
                    <div>
                        <img className='pro-img1' src={portfolio} />
                    </div>
                    <div className='pro-text'>
                        <h5>Portfolio Website</h5>
                        <p className='pro-p'>A personal portfolio website showcasing projects, skills, and contact information.</p>
                        <div className='pro-tech'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React</li>
                        </div>
                    </div>
                    <div></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project