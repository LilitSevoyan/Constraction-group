import React,{useEffect} from "react"
import Address from "./AddressWrapper"
import Description from "./DescriptionContent"

export default function Buildingpage(){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return(
    <div>
      <Address />
      <Description/>
    </div>
    
  )

}