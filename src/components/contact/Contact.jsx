import React from 'react'
import './Contact.css'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";


const Contact = () => {
  return (
    <>
    <div className="contact container mt" id='contact'>
    <h1>Contact Me</h1>
    <div className="contact-icon">
      <a href='https://www.instagram.com/the_fury____/' target='_blank' className="itemss">
        <FaInstagram  className='icons'/>
      </a>
      <a href='' target='_blank' className="itemss">
        <FaFacebook className='icons'/>
      </a>
      <a href='https://www.linkedin.com/in/asutosh-pradhan-92862725b/' target='_blank' className="itemss">
        <FaLinkedin className='icons'/>
      </a>
      <a href='https://github.com/fury786786S' target='_blank' className="itemss">
        <FaSquareGithub className='icons'/>
      </a>
      <a href="mailto:asu26jan2000@gmail.com" class="itemss">
        <BiLogoGmail className='icons'/>
      </a>
    </div>
    </div>
    </>
  )
}

export default Contact