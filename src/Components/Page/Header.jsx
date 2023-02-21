import React, { useState } from "react"
import { Link }  from "react-router-dom"
import { Logo } from "../../assets"
import { useTranslation } from "react-i18next"
import useLocalStorage from "../../hooks/useLocalStorage"
import i18n from "../../i18n/i18n"
import { languages } from "../languages/languages"

export default function Header() {
  const [active, setActive] = useState(false)
  const {t} = useTranslation()
  const [language, setLanguage] = useLocalStorage('language', "am")

  const handleLanguageChange = (item) => {
    i18n.changeLanguage(item)
    setLanguage(item)
    setActive(!active)
  }

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
              <li><Link to="/contact"className="menu-item">{t("Contacts")}</Link></li>
              <li>
                <div className="lang-menu">
                  <div className="selected-lang" onClick={() => setActive(!active)}>
                    {languages.map((lang) => lang.lang === language 
                      ? <span key={lang.name}>
                          {lang.flag} {lang.name} 
                          <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                      : null
                    )}
                  </div>
                  <div className={active ? "triangle" : "hide"}></div>
                  <ul className={active ? "show" : "hide"}>
                    {languages.map((lang) => lang.lang !== language 
                      ? <li key={lang.name}>
                          <Link onClick={() => handleLanguageChange(lang.lang)}>
                            {lang.flag}{lang.name}
                          </Link>
                        </li>
                      : null
                    )}
                  </ul>
                </div>
              </li>
              <li>
                <Link to="tel:+374 (77) 444444">
                  <div className="menu-item  header-phone">
                    <i className="fas fa-phone-alt"></i>
                    <span>+374 (77) 444444 </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
