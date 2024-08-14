import React from 'react'
import './Skills.css'
import skills from '../data/skills.json'

const Skills = () => {
  return (
    <>
      <div className="container skills" id='skills'>
        <h1 className='text-light'>Skills</h1>
        <div className="items" >
          {skills.map((data) => (<>

            <div className="item col-6 col-md-4 col-lg-3 mb-4" key={data.id}>
              <img src={`/assets/${data.imageSrc}`} alt="" srcset="" />
              <h3>{data.title}</h3>
            </div>

          </>))}
        </div>
      </div>
    </>
  )
}

export default Skills