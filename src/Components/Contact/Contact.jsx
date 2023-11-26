import React, { useState, useRef } from 'react';
import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';

export default function Contact() {
    const { t } = useTranslation();
    const [formSent, setFormSent] = useState(false);
    const formRef = useRef(); 

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    const sendEmail = (e) => {
        e.preventDefault();

        // Récupérer la réponse reCAPTCHA du champ caché généré par Google reCAPTCHA
        const recaptchaResponse = document.getElementById('g-recaptcha-response').value;

        if (recaptchaResponse) {
            // Ajouter la réponse reCAPTCHA aux données du formulaire
            const formData = new FormData(formRef.current);
            formData.append('g-recaptcha-response', recaptchaResponse);

            emailjs.sendForm(serviceID, templateID, formData, userID)
                .then((result) => {
                    console.log(result.text);
                    setFormSent(true); // Indiquer que le formulaire a été envoyé avec succès
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            // Vous pouvez gérer le cas où reCAPTCHA n'est pas résolu comme bon vous semble
            console.log('Please resolve the reCAPTCHA.');
        }
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

                <div className="g-recaptcha" data-sitekey="6LekdR0pAAAAAAC8yKCVc0HVxI1N-k61VjEmkam7"></div>

                <div className="input-group button__div">
                    <button type="submit">{formSent ? t('contact.sent') : t('contact.button')}</button>
                </div>
            </form>
            {formSent && <p>{t('contact.success')}</p>}
        </div>
    );
}


