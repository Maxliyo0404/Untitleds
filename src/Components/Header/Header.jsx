import "./Header.css";
import React, { useState } from 'react'
import logo_1 from "./image/logo_1.svg"
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function Header() {
    const {t, i18n} = useTranslation()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleChangeLanguage =(event)=>{
        i18n.changeLanguage(event.target.value)
    }
  return (
   <>
   <div className="Header">
  <div className="container">
    <div className="header-wrapper">
      
      <a className="logo" href="#">
        <img src={logo_1} alt="logo" />
        {t("header.logo")}
      </a>

   
      <nav className={`header-nav ${isMenuOpen ? "active" : ""}`}>
        <ul className="header-list">
          <li><a className="header-link">{t("header.service")}</a></li>
          <li><a className="header-link">{t("header.about")}</a></li>
          <li><a className="header-link">{t("header.faq")}</a></li>
          <li><a className="header-link">{t("header.contact")}</a></li>
        </ul>
        
        <div className="header-actions">
          <select className="select" onChange={handleChangeLanguage} value={i18n.language}>
            <option value="uz">Uz</option>
            <option value="en">Eng</option>
          </select>
          <button className="header-btn">{t("header.btn")}</button>
        </div>
      </nav>

   
      <div className={`burger-menu ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  </div>
</div>
   </>
  )
}

export default Header;