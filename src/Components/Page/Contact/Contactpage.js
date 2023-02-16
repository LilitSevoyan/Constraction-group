import React, { useEffect } from "react"
import Contact from "./Contact"
import ContactWrapper from "./ContactWrapper"

export default function ContactUs() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return(
    <div className="ContactImageWrapper">
      <Contact/>
      <ContactWrapper/>
    </div>
  )
}
