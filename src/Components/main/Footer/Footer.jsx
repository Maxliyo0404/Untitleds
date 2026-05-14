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
                
            </div>
        </div>
    </div>
  )
}

export default Footer