import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

//TODO: make this flot
const Navbar = () => {

  return (

    <div className = "navbar">
        <div className = "links">
        <Link to="/weiqinghan.com">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/eyes">Angel</Link>
          <Link to="/memory">Memorybook</Link>
        </div>
    </div>
  )
}

export default Navbar