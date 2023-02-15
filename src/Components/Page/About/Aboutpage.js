import React,{useEffect} from "react"
import Image from "../About/ImageWrapper"
import About from "../About/AboutWrapper"
//import "../../Style/aboutpage/about.css"
export default function Aboutpage(){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return(
      <div>
        <Image/>
        <About/>
      </div>
      
    )
  
  }