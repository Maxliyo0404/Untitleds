import "./SectionOne.css";
import React from 'react'
import { useTranslation } from "react-i18next";
import { FaBeer, FaAddressBook } from 'react-icons/fa'; 
import { GiBrain } from "react-icons/gi";
import { PiCertificateBold } from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa6";

function SectionOne() {
     const {t, i18n} = useTranslation();
  return (
    <div className="sectionOne">
        <div className="container">
            <div className="sectionOne_wrapper">
                <h2 className="one-title">{t ("sectionOne.one-title")}</h2>
                <hr />
                <ul className="one-list">
                    <li className="one-item">
                     <div className="icon"><GiBrain /></div>
                     <h3 className="list-title">{t ("sectionOne.list-title")}</h3>
                     <p className="list-text">{t ("sectionOne.list-text")}</p>
                    </li>
                    <li className="one-item">
                     <div className="icon"><PiCertificateBold /></div>
                     <h3 className="list-title">{t ("sectionOne.list-title1")}</h3>
                     <p className="list-text">{t ("sectionOne.list-text")}</p>
                    </li>
                    <li className="one-item">
                     <div className="icon"><FaRegHandshake /></div>
                      <h3 className="list-title">{t("sectionOne.list-title2")}</h3>
                     <p className="list-text">{t("sectionOne.list-text")}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SectionOne