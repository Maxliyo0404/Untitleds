import { useTranslation } from "react-i18next";
import "./SectionSix.css";
import React from 'react'

function SectionSix() {
    const {t, i18n} = useTranslation();
  return (
    <div className="sectionSix">
        <div className="container">
            <div className="sectionSix-wrapper">
             <div className="six-left">
                <h2 className="six-title">{t("sectionSix.six-title")}</h2>
             </div>
            </div>
        </div>
    </div>
  )
}

export default SectionSix