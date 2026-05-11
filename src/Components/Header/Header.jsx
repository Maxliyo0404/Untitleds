import"./Header.css";
import React from 'react'


function Header() {
  return (
   <>
   <div className="Header">
    <div className="container">
        <div className="header-container">
            <a className="logo" href="#"><img src="" alt="" /></a>
            <ul className="header-list">
                <li><a className="header-link" href="#"></a></li>
                <li><a className="header-link" href="#"></a></li>
                <li><a className="header-link" href="#"></a></li>
                <li><a className="header-link" href="#"></a></li>
            </ul>
            <select className="select">
                <option value="en">eng</option>
                <option value="uz">uzb</option>
                <option value="ru">rus</option>
            </select>
        </div>
    </div>
   </div>
   </>
  )
}

export default Header