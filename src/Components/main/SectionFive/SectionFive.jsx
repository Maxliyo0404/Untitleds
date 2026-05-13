import { useTranslation } from "react-i18next";
import "./SectionFive.css";
import React, { useState } from 'react'
import { FaBeer, FaAddressBook } from 'react-icons/fa'; 

function SectionFive() {
    const {t, i18n} = useTranslation();

  return (
    <div className="sectionFive">
        <div className="container">
            <div className="sectionFive-wrapper">
                <hr />
                <div className="five-card">
            <div className="five-left">
                <h2 className="five-title">{t("sectionFive.five-title")}</h2>
            </div>
             <div className="five-right">
                <div className="select-wrapper">
                <select className="select">
                    <option value="select-label">{t("sectionFive.select-label")}</option>
                    <option value="basic ">{t("sectionFive.basic")}</option>
                    <option value="middle">{t("sectionFive.middle")}</option>
                </select>
                </div>
                <div className="select-wrapper">
                <select className="select">
                    <option value="select-label">{t("sectionFive.select-label")}</option>
                    <option value="basic ">{t("sectionFive.basic")}</option>
                    <option value="middle">{t("sectionFive.middle")}</option>
                </select>
                </div>
                <div className="select-wrapper">
                <select className="select">
                    <option value="select-label">{t("sectionFive.select-label")}</option>
                    <option value="basic ">{t("sectionFive.basic")}</option>
                    <option value="middle">{t("sectionFive.middle")}</option>
                </select>
</div>
                    </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SectionFive