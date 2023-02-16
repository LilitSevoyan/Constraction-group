import React from "react"
import {Link}  from "react-router-dom"
import {Logo} from "../../assets"

export default function Header() {
  return(
    <div className="headerWrapper">
      <div className="desktop-menu">
        <div className="left-side">
          <Link to="/">
            <img src={Logo}  alt="logo" />
            <h1>Constructions 
              <span>group</span>
            </h1>
          </Link>
        </div>
        <div className="right-side">
          <div className="menu-wrapper">
            <ul className="menu-items-list">
              <li><Link to="/"className="menu-item">Գլխավոր</Link></li>
              <li><Link to="/about"className="menu-item">Համալիրի մասին</Link></li>
              <li><Link to="/contact"className="menu-item">Կապ</Link></li>
              <li>
                <a href="tel:+374 (77) 444444">
                  <div className="menu-item  header-phone">
                    <i className="fas fa-phone-alt"></i>
                    <span>+374 (77) 444444 </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
