import React, { useState, useRef } from 'react';
import { useTranslation } from "react-i18next";


export default function Contact() {
    const { t } = useTranslation();
    const [formSent, setFormSent] = useState(false);
    const formRef = useRef(); 

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;


    const sendEmail = (e) => {
        e.preventDefault(); // Empêche le formulaire d'envoyer une requête POST classique

        emailjs.sendForm(serviceID, templateID, formRef.current, userID)
            .then((result) => {
                console.log(result.text);
                setFormSent(true); // Mettre à jour l'état pour indiquer l'envoi réussi
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact-container">
            <form ref={formRef} name="template_clst4ep" className="contact-container-form" onSubmit={sendEmail}>
                <input type="hidden" name="form-name" value="template_clst4ep" />

                <div className="input-group">
                    <label htmlFor="name">{t('contact.form.name')}</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div className="input-group">
                    <label htmlFor="email">{t('contact.form.email')}</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="input-group">
                    <label htmlFor="message">{t('contact.form.message')}</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>

                <div class="g-recaptcha" data-sitekey="6LekdR0pAAAAAAC8yKCVc0HVxI1N-k61VjEmkam7"></div>

                <div className="input-group button__div">
                    <button type="submit">{formSent ? t('contact.sent') : t('contact.button')}</button>
                </div>
            </form>
            {formSent && <p>{t('contact.thankYouMessage')}</p>}
        </div>
    );
}
