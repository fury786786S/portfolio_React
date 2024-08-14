// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Navbar.css'

// const Navbar = () => {
//   return (
//     <div>
//         <div className="container navbar d-flex justify-content-between align-items-center">
//             <div className="navbar-brand fw-bold fs-1">Portfolio</div>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="right">
//                  <a href="#home" className='nav-link'>Home</a>
//                  <a href="#skills" className='nav-link'>Skills</a>
//                  <a href="#project" className='nav-link'>Project</a>
//                  <a href="#contact" className='nav-link'>Contact</a>
//              </div>
//          </div>
//      </div>
//   )
// }

// export default Navbar
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  ">
      <div className="container ">
        <h1 className="navbar-brand text-light  ">Portfolio</h1>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <a className="nav-link text-light" href="#home">Home</a>
          <a className="nav-link text-light" href="#skills">Skills</a>
          <a className="nav-link text-light" href="#project">Project</a>
          <a className="nav-link text-light" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
