import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Vous pouvez implémenter la logique d'envoi de formulaire ici.
    // Utilisez `fetch` ou un autre moyen pour envoyer les données à Netlify.
    // Assurez-vous de gérer les états de `success`, `error` et `loading` en conséquence.

    // Exemple de logique d'envoi, remplacez avec votre propre endpoint si nécessaire
    const formData = new FormData(e.target);
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        setSuccess(true);
        // Réinitialisez le formulaire ici si nécessaire
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="contact-container-form">
        <input type="hidden" name="form-name" value="contact" />
        {loading && <div>{t('contact.loading')}</div>}
        {error && <div>{t('contact.error')}</div>}
        {success && <div>{t('contact.success')}</div>}
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
