import "/.SectionOne.css";
import React from 'react'
import { useTranslation } from "react-i18next";
import { FaBeer, FaAddressBook } from 'react-icons/fa'; 

function SectionOne() {
     const {t, i18n} = useTranslation();
  return (
    <div className="sectionOne">
        <div className="container">
            <div className="secttionOne_qrapper">
                <h2 className="one-title">{t ("sectionOne.one-title")}</h2>
                <hr />
                <ul className="one-list">
                    <li className="one-item">
                     <div className="icon"></div>
                     <h3 className="list -title">{t ("sectionOne.list-title")}</h3>
                     <p className="list-text">{t ("sectionone.list-text")}</p>
                    </li>
                    <li className="one-item">
                     <div className="icon"></div>
                     <h3 className="list -title">{t ("sectionOne.list-title1")}</h3>
                     <p className="list-text">{t ("sectionone.list-text")}</p>
                    </li>
                    <li className="one-item">
                     <div className="icon"></div>
                     <h3 className="list -title">{t ("sectionOne.list-title2")}</h3>
                     <p className="list-text">{t ("sectionone.list-text")}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SectionOne