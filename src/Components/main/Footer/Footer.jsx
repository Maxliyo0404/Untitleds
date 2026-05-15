import { useTranslation } from "react-i18next";
import "./Footer.css";
import React from 'react'
import footer_1 from "./image/footer_1.svg";
import { FaBeer, FaAddressBook } from 'react-icons/fa'; 
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

function Footer() {
    const {t, i18n} = useTranslation();
  return (
    <div className="footer">
        <div className="container">
            <div className="footer-wrapper">
                <a className="footer-img" href="#"> <img src={footer_1} alt="rasm" />{t("footer.logo")}</a>
                <ul className=" footer-list">
                    <li className="footer-item">
                     <a className="footers" href="#">
                        <span className="spans"><CiLocationOn /></span>{t("footer.footer-title")}
                     <span className="iconn"><GoArrowUpRight /></span></a>
                     <a className="footers" href="#">
                        <span className="spans"><MdOutlineLocalPhone /></span>{t("footer.footer-number")}
                    <span className="iconn"><GoArrowUpRight /></span></a>
                    </li>
                    <hr />
                    <div className="iconss">
                        <span className="icons">{t("footer.Facebook")}<GoArrowUpRight /></span>
                        <span className="icons">{t("footer.Instagram")}<GoArrowUpRight /></span>
                        <span className="icons">{t("footer.Telegram")}<GoArrowUpRight /></span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer