import React, { useEffect } from "react"
import Image from "../About/ImageWrapper"
import About from "../About/AboutWrapper"

export default function Aboutpage() {
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