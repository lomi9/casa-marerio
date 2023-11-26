import React, { useState, useRef } from 'react';
import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';

export default function Contact() {
    const { t } = useTranslation();
    const [formStatus, setFormStatus] = useState({ sent: false, message: '' });
    const formRef = useRef(); 

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, formRef.current, userID)
        .then((result) => {
            console.log(result.text);
            setFormStatus({ sent: true, message: t('contact.success') }); // Message de succès
            formRef.current.reset(); // Réinitialiser le formulaire en cas de succès
        }, (error) => {
            console.log(error.text);
            setFormStatus({ sent: false, message: t('contact.error') }); // Message d'erreur
        });
};

    return (
        <div className="contact-container">
            <p className="contact-container-msg">{formStatus.message}</p>
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


                <div className="input-group button__div">
                    <button type="submit">{formStatus ? t('contact.button') : t('contact.button')}</button>
                </div>
            </form>
        </div>
    );
}


