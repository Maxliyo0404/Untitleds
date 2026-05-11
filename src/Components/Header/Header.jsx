import "./Header.css";
import React from 'react'
import logo_1 from "./image/logo_1.svg"
import i18next from "i18next";

 
function Header() {
    const handleChangeLanguage =(event)=>{
        i18next.changLanguage(event.target.value)
    }
  return (
   <>
   <div className="Header">
    <div className="container">
        <div className="header-container">
            <a className="logo" href="#"><img src={logo_1} alt="logo"/>Dizenfeksiya</a>
            <ul className="header-list">
                <li><a className="header-link" href="#">Service</a></li>
                <li><a className="header-link" href="#">About</a></li>
                <li><a className="header-link" href="#">Faq</a></li>
                <li><a className="header-link" href="#">Contact</a></li>
            </ul>
            <select className="select">
                <option value="en">Uz</option>
                <option value="uz">Eng</option>
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