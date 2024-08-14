import React, { useEffect, useRef } from 'react'
import './Home.css'
import pdf from '../../pdf/Front-end new CV.pdf'
import hero from '../data/hero.json'
import Typed from 'typed.js'


const Home = () => {
  const typedRef =useRef(null)
  useEffect(() => {
    const options = {
      strings:["Welcome to my profile","My name is Asutosh Pradhan","I'm full stack developer"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }
    
    const typed = new Typed(typedRef.current , options)

    return () => {
      typed.destroy()
    }
  }, [])
  
  return (
    <div>
      <div className=" container home d-flex justify-content-between align-items-center" id='home'>
        <div className="resume">
          <h1 className='text-light' ref={typedRef}>Lorem  adipisicing elit. Voluptate, fugiat?</h1>

          <a href={pdf}  className=' btn btn-outline-warning my-4'>Resume</a>
        </div>
        <div className="img">
          <img src={`/assets/${hero.imgSrc}`} className='' alt="hero"/>
        </div>

      </div>
    </div>
  )
}

export default Home