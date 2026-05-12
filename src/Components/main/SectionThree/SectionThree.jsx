import { useTranslation } from "react-i18next";
import "./SectionThree.css";
import React from 'react'

function SectionThree() {
     const {t, i18n} = useTranslation();
  return (
     <div className="sectionThree">
        <div className="container">
            <div className="sectionThree-wrapper">
                <h2 className="three-title">{t("sectionThree.three-title")}</h2>
                <p className="three-title">{t("sectionThree.three-text")}</p>
                <ul className="three-list">
                    <li className="three-item">
                        <h3 className="list-title">{t("sectionThree.list-title")}</h3>
                        <p className="list-text">{t("sectionThree.list-text")}</p>
                        <span className="three-span">{t("sectionThree.span1")}</span>
                    </li>
                    <li className="three-item">
                        <h3 className="list-title">{t("sectionThree.list-title")}</h3>
                        <p className="list-text">{t("sectionThree.list-text")}</p>
                        <span className="three-span">{t("sectionThree.span1")}</span>
                    </li>
                    <li className="three-item">
                        <h3 className="list-title">{t("sectionThree.list-title")}</h3>
                        <p className="list-text">{t("sectionThree.list-text")}</p>
                        <span className="three-span">{t("sectionThree.span1")}</span>
                    </li>
                </ul>
            </div>
        </div>
     </div>
  )
}

export default SectionThree