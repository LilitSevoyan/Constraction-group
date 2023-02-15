import React from "react"
import {contactUs} from "../../assets"

let divStyle = {
  backgroundImage: "url(" + contactUs + ")"
};

export default function Contact() {
  
  return (
      <div className="MainContent">
          <div style={ divStyle } className="ContactWrapper">
            <div  className="ContactImageWrapper">
              <div className="transparent-bg">
                <h1 className="contact-main-title">Հետադարձ կապ</h1>
              </div>
            </div>
          </div>
      </div>
    
  )
}
