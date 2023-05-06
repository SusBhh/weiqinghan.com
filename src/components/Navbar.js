import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

//TODO: make this flot
const Navbar = () => {

  return (

    <div className = "navbar">
        <div className = "links">
        <Link to="/weiqinghan.com">Home</Link>
        <Link to="/weiqinghan.com/projects">Projects</Link>
        <Link to="/weiqinghan.com/experience">Experience</Link>
        <Link to="/weiqinghan.com/eyes">Angel</Link>
        <Link to="/weiqinghan.com/memory">Memorybook</Link>
        </div>
    </div>
  )
}

export default Navbar