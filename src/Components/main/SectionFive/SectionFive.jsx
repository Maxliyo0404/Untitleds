import { useTranslation } from "react-i18next";
import "./SectionFive.css";
import React, { useState } from 'react'
import { FaBeer, FaAddressBook } from 'react-icons/fa'; 

function SectionFive() {
    const {t, i18n} = useTranslation();
    const [val, setVal] = useState("basic");

  return (
    <div className="sectionFive">
        <div className="container">
            <div className="sectionFive-wrapper">
            <div className="five-left">
                <h2 className="five-title">{t("sectionFive.five-title")}</h2>
            </div>
             <div className="five-right">
               <label htmlFor="course-find">{t('sectionFive.select-label')}</label>
                        <select 
                            id="course-find" 
                            className="custom-select"
                            value={val}
                            onChange={(e) => setVal(e.target.value)}
                        >
                            <option value="basic">{t('sectionFive.options.basic')}</option>
                            <option value="middle">{t('sectionFive.options.middle')}</option>
                            <option value="high">{t('sectionFive.options.high')}</option>
                        </select>
                        
                     
                        <div className="selection-result">
                             <p>{t(`sectionFive.details.${val}`)}</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default SectionFive