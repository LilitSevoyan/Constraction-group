import React, { useState, useEffect } from "react"
import HeaderWrapper from "./HeaderWrapper"
import CalcMainContent from "./CalcMainContent"

export default function Calculator() {
  const [addcontent,setAddcontent] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <HeaderWrapper/>
      <CalcMainContent add={addcontent} setAdd={setAddcontent}/>
    </div>
  )
}