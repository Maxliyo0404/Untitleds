import { useTranslation } from "react-i18next";
import "./SectionSix.css";
import React from 'react'
import six_1 from "./image/six_1.svg"

function SectionSix() {
    const {t, i18n} = useTranslation();
  return (
    <div className="sectionSix">
        <div className="container">
            <div className="sectionSix-wrapper">
             <div className="six-left">
                <h2 className="six-title">{t("sectionSix.six-title")}</h2>
                <form color="form">
                    <label className="label">
                    <input type="text"required placeholder={t('placeholders.name')}/>
                    </label>
                    <label className="label">
                    <input type="number"required placeholder={t('placeholders.phone')} />
                    </label>
                    <label className="label">
                         <input type="checkbox" required />
                     {t('placeholders.privacy_policy')}</label>
                     <button className="six-btn">{t("placeholders.six-btn")}</button>
                </form>
             </div>
             <div className="six-right">
                <p className="six-btn">{t("sectionSix.six-text")}</p>
                <img src={six_1} alt="rasm" />
             </div>
            </div>
        </div>
    </div>
  )
}

export default SectionSix