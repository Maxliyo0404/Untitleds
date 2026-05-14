import { useTranslation } from "react-i18next";
import "./Footer.css";
import React from 'react'
import footer_1 from "./image/footer_1.svg";

function Footer() {
    const {t, i18n} = useTranslation();
  return (
    <div className="footer">
        <div className="container">
            <div className="footer-wrapper">
                <a className="footer-img" href="#"> <img src={footer_1} alt="rasm" /></a>
                <ul className=" footer-list">
                    <li className="footer-item"></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer