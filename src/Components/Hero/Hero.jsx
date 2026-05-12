import "./Hero.css";
import React from 'react'
import { useTranslation } from "react-i18next";
import hero_1  from "./image/hero_1.png";
import hero_2  from "./image/hero_2.svg";
import { FaBeer, FaAddressBook } from 'react-icons/fa'; 
import { GoArrowUpRight } from "react-icons/go";
function Hero() {
   const {t, i18n} = useTranslation();
  return (
    <div className="hero">
      <div className="container">
      <div className="hero-wrapper">
       <div className="hero-left">
        <h1 className="hero-title">{t("hero.title")}</h1>
        <p className="hero-text">{t("hero.text")}</p>
        <div className="hero-img">
          <div className="hero-rasm1">
            <img src={hero_1} alt="rasm" />
            <div className="span1"></div>
          </div>
          <div className="hero-rasm2"></div>
          <div className="hero-rasm3"></div>
        
        </div>
        <div className="hero-btns">
          <button className="hero-btn">{t("hero.hero-btn")}</button>
          <button className="hero-btn1"><GoArrowUpRight /></button>
        </div>

       </div>
       <div className="hero-right">
        <img src={hero_2} alt="rasm" />
       </div>
      </div>
      </div>
    </div>
  )
}

export default Hero