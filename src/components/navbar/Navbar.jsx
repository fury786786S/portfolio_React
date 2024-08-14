import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="container d-flex justify-content-between align-items-center">
            <div className="left fw-bold fs-1">Portfolio</div>
            <div className="right">
                <a href="#home" className='nav-items'>Home</a>
                <a href="#sevices" className='nav-items'>Services</a>
                <a href="#skills" className='nav-items'>Skills</a>
                <a href="#project" className='nav-items'>Project</a>
                <a href="#contact" className='nav-items'>Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar