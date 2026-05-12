import "./SectionTwo.css";
import React from 'react'
import two_1 from "./image/two_1.svg";
import { useTranslation } from "react-i18next";

function SectionTwo() {
     const {t, i18n} = useTranslation();
  return (
    <div className="sectionTwo">
        <div className="container">
            <div className="sectionTwo-wrapper">
               <div className="two-right">
                
               </div>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo