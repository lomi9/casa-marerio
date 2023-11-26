import React from 'react';
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact-container">
      <form name="contact" method="POST" data-netlify="true" className="contact-container-form">
        {/* Le champ caché suivant est utilisé pour indiquer le nom du formulaire à Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        
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
          <button type="submit">{t('contact.button')}</button>
        </div>
      </form>
    </div>
  );
}
