import React, { useState } from 'react';
import "./Header.css";
import logo_1 from "./image/logo_1.svg";
import { useTranslation } from "react-i18next";

function Header() {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleChangeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <header className="header">
            <div className="container">
                <nav className="header-nav">
                    {/* Logo */}
                    <a className="logo" href="/">
                        <img src={logo_1} alt="logo" />
                        <span>{t("header.logo")}</span>
                    </a>

                    {/* Navigatsiya menyusi */}
                    <ul className={`header-list ${isMenuOpen ? "active" : ""}`}>
                        <li><a className="header-link" href="#" onClick={() => setIsMenuOpen(false)}>{t("header.service")}</a></li>
                        <li><a className="header-link" href="#" onClick={() => setIsMenuOpen(false)}>{t("header.about")}</a></li>
                        <li><a className="header-link" href="#" onClick={() => setIsMenuOpen(false)}>{t("header.faq")}</a></li>
                        <li><a className="header-link" href="#" onClick={() => setIsMenuOpen(false)}>{t("header.contact")}</a></li>
                        
                        {/* Faqat mobilda ko'rinadigan tugma */}
                        <li className="mobile-only">
                            <button className="header-btn">{t("header.btn")}</button>
                        </li>
                    </ul>

                    {/* O'ng tomon: Til va Tugma */}
                    <div className="header-actions">
                        <div className="select-wrapper">
                            <select className="lang-select" onChange={handleChangeLanguage} value={i18n.language}>
                                <option value="uz">Uz</option>
                                <option value="en">En</option>
                                <option value="ru">Ru</option>
                            </select>
                        </div>
                        
                        <button className="header-btn desktop-only">{t("header.btn")}</button>

                        {/* Burger menyu belgisi */}
                        <div className={`burger-menu ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </nav>
            </div>
            
            {/* Mobil menyu ochiqligida orqa fonni qorong'ulash (ixtiyoriy) */}
            {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>}
        </header>
    );
}

export default Header;