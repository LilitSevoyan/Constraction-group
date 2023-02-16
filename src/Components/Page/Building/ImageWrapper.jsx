import React from "react"
import { gyurjyan27 } from "../../../assets/index"
import Svg1 from "../Building/IMGSVG"

export default function ImageWrapper(props) {

 return (
    <div className="ImageContent">
      <div className="ImageWrapper">
        <img src={gyurjyan27} alt="building"  />
        <Svg1/>
      </div>
    </div>
  )
}