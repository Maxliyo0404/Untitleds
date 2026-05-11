import"./Header.css";
import React from 'react'
import logo1 from "./src/image/logo1 (2).svg"

 
function Header() {
  return (
   <>
   <div className="Header">
    <div className="container">
        <div className="header-container">
            <a className="logo" href="#"><img src={logo1} alt="" />Dizenfeksiya</a>
            <ul className="header-list">
                <li><a className="header-link" href="#">Service</a></li>
                <li><a className="header-link" href="#">Service</a></li>
                <li><a className="header-link" href="#">Faq</a></li>
                <li><a className="header-link" href="#">    </a></li>
            </ul>
            <select className="select">
                <option value="en">eng</option>
                <option value="uz">uzb</option>
                <option value="ru">rus</option>
            </select>
            <button className="header-btn"></button>
        </div>
    </div>
   </div>
   </>
  )
}

export default Header