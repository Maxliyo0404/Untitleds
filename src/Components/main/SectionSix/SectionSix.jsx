import React from 'react';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import "./SectionSix.css";
import six_1 from "./image/six_1.svg";

function SectionSix() {
    const { t } = useTranslation();

    const sendMessage = (event) => {
        event.preventDefault();
        
        const token = `8799654997:AAFXbpKmshRxD_WcqAShMxtcHeU-IMsZ2OE`;
        const chat_id = 647264939;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

    
        const name = document.getElementById("username").value;
        const phone = document.getElementById("phone").value;

        const messageContent = `👤 Ism: ${name}\n📞 Telefon: ${phone}`;

        axios({
            url: url,
            method: "POST",
            data: {
                chat_id: chat_id,
                text: messageContent,
            }
        })
        .then(() => {
            alert("Successfully sent! ✅");
    
            event.target.reset();
        })
        .catch((error) => {
            console.error("Xatolik yuz berdi:", error);
            alert("Xabar yuborishda xatolik! ❌");
        });
    };

    return (
        <div className="sectionSix">
            <div className="container">
                <div className="sectionSix-wrapper">
                    <div className="six-left">
                        <h2 className="six-title">{t("sectionSix.six-title")}</h2>
                        <form onSubmit={sendMessage}>
                            <label className="label">
                                <input 
                                    id="username" 
                                    type="text" 
                                    required 
                                    placeholder={t('placeholders.name')} 
                                />
                            </label>
                            <label className="label">
                                <input 
                                    id="phone" 
                                    type="text" 
                                    required 
                                    placeholder={t('placeholders.phone')} 
                                />
                            </label>
                            <label className="checkbox-group">
                                <input className="input" type="checkbox" required />
                                {t('placeholders.privacy_policy')}
                            </label>
                            <button type="submit" className="six-btn">
                                {t("placeholders.six-btn")}
                            </button>
                        </form>
                    </div>
                    <div className="six-right">
                        <p className="six-text">{t("sectionSix.six-text")}</p>
                        <img className='six-rasm' src={six_1} alt="rasm" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionSix;