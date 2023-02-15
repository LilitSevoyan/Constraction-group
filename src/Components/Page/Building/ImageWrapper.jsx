import React from "react"
import {gyurjyan27} from "../../assets"
import Svg1 from "../Building/IMGSVG"
//import {Link} from 'react-router-dom'

export default function ImageWrapper(props){

 return(
    <div className="ImageContent">
      <div className="ImageWrapper">
        <img src={gyurjyan27} alt="building"  />
        <Svg1/>
        
      </div>
    </div>
    
  )
}