import { useTranslation } from "react-i18next";
import "./SectionThree.css";
import React from 'react'
import three_1 from "./image/three_1.svg";
import three_2 from "./image/three_2.svg";
import three_3 from "./image/three_3.svg";
function SectionThree() {
     const {t, i18n} = useTranslation();
  return (
     <div className="sectionThree">
        <div className="container">
            <div className="sectionThree-wrapper">
                <h2 className="three-title">{t("sectionThree.three-title")}</h2>
                <p className="three-text">{t("sectionThree.three-text")}</p>
                <ul className="three-list">
                    <li className="three-item">
                        <h3 className="list-title">{t("sectionThree.list-title")}</h3>
                        <p className="list-text">{t("sectionThree.list-text")}</p>
                        <span className="three-span">{t("sectionThree.span1")}</span>
                         <img className="three-rasm" src={three_1} alt="" />
                    </li>
                    <li className="three-item">
                        <h3 className="list-title">{t("sectionThree.list-title1")}</h3>
                        <p className="list-text1">{t("sectionThree.list-text1")}</p>
                        <span className="three-span1">{t("sectionThree.span2")}</span>
                         <img className="three-rasm" src={three_2} alt="" />
                    </li>
                    <li className="three-item">
                        <h3 className="list-title">{t("sectionThree.list-title2")}</h3>
                        <p className="list-text2">{t("sectionThree.list-text2")}</p>
                        <span className="three-span1">{t("sectionThree.span1")}</span>
                         <img className="three-rasm" src={three_3} alt="" />
                    </li>
                </ul>
            </div>
        </div>
     </div>
  )
}

export default SectionThree