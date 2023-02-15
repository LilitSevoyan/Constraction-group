import React,{useEffect} from "react"
import HeaderWrapper from "./HeaderWrapper"
import FloorContent from "./FloorContent"


export default function Floorpage(){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return(
    <div>
      <HeaderWrapper/>
      <FloorContent/>
    </div>
    
  )
}

