import "./SectionFour.css";
import React from 'react'
import four_1 from "./image/four_1.svg";
import four_2 from "./image/four_2.svg";
import { useTranslation } from "react-i18next";


function SectionFour() {
     const {t, i18n} = useTranslation();
  return (
      <div className="sectionFour">
        <div className="container">
            <div className="sectionFour-wrapper">
                <div className="four-left">
                    <img className="four-rasm" src={four_1} alt="rasm" />
                </div>
                <div className="four-right">
                    <img className="right-rasm" src={four_2} alt="rasm" />
                    <h2 className="four-title">{t("sectionFour.four-title")}</h2>
                    <button className="four-btn">{t("sectionFour.four-btn")}</button>
                </div>
            </div>
        </div>
      </div>
  )
}

export default SectionFour