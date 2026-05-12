import "./SectionTwo.css";
import React from 'react'
import two_1 from "./image/two_1.svg";
import { useTranslation } from "react-i18next";

function SectionTwo() {
     const {t, i18n} = useTranslation();
  return (
    <div className="sectionTwo">
        <div className="container">
            <div className="sectionTwo-wrapper">
               <div className="two-right">
                <h2 className="two-title">{t("sectionTwo.two-title")}</h2>
                <p className="two-text">{t("sectionTwo.two-text")}</p>
                <button className="two-btn"> {t("sectionTwo.two-btn")} </button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo