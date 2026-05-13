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
                </form>
             </div>
            </div>
        </div>
    </div>
  )
}

export default SectionSix