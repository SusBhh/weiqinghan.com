import React from 'react'
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "../../data/photos";
//import './Memory.css'

const Memory = () => {
  return (
    <div className="memory">
      <Gallery photos={photos} direction={"column"}> </Gallery>
    </div>
  )
}
export default Memory