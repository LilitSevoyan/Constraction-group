import React from "react";
import {Link} from "react-router-dom"
import {Logo,Facebook,Instagram,Linkedin} from "../../assets"

export default function Footer() {
  return(
    <footer className="footerWrapper">
      <div className="top-side desktop">
        <div className="col">
          <div className="logo-wrapper">
            <Link to="/">
              <img src={Logo}  alt="logo" />
              <h1>Constructions 
                <span>group</span>
              </h1>
            </Link>
          </div>
          <div className="social-wrapper">
            <Link to="/">
              <Facebook/>
            </Link>
            <Link to="/">
              <Instagram/>
            </Link>
            <Link to="/">
              <Linkedin/>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="title">Անվտանգություն</div>
          <Link to="/privacy-policy">
            <p>Գաղտնիության քաղաքականություն</p>
          </Link>
          <Link to="/privacy-policy">
            <p>Ընդհանուր դրույթներ և պայմաններ</p>
          </Link>
        </div>
        <div className="col">
          <div className="title">Ընկերություն</div>
          <Link to="/about">
              <p>Մեր մասին</p>
          </Link>
          <Link to="/filter">
              <p>Ֆիլտրեր</p>
          </Link>
          <Link to="/calculator">
              <p>Հաշվիչ</p>
          </Link>
        </div>
        <div className="col">
          <div className="title">Կապ</div>
          <p>Երևան,Գյուրջյան 27 փ․</p>
          <p>+374 (77) 444444</p>
          <p>sales@construction-group.am</p>
        </div>
      </div>
    </footer>
  )
}