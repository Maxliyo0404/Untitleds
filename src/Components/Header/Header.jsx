import "./Header.css";
import React from 'react'
import logo_1 from "./image/logo_1.svg"
import i18next from "i18next";
import { useTranslation } from "react-i18next";

 
function Header() {
    const {t, i18n} = useTranslation()
    const handleChangeLanguage =(event)=>{
        i18n.changeLanguage(event.target.value)
    }
  return (
   <>
   <div className="Header">
    <div className="container">
        <div className="header-container">
            <a className="logo" href="#"><img src={logo_1} alt="logo"/>{t("header.Dizenfeksiya")}</a>
            <ul className="header-list">
                <li><a className="header-link" href="#">{t("header.service")} </a></li>
                <li><a className="header-link" href="#">{t("header.about")}</a></li>
                <li><a className="header-link" href="#">{t("header.faq")}</a></li>
                <li><a className="header-link" href="#">{t("header.contact")}</a></li>
            </ul>
            <select className="select" onChange={handleChangeLanguage} value={i18n.language} >
                <option value="uz">Uz</option>
                <option value="en">Eng</option>
                <option value="ru">Rus</option>
            </select>
            <button className="header-btn"></button>
        </div>
    </div>
   </div>
   </>
  )
}

export default Header;