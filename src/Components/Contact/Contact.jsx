import React from 'react';
import { useTranslation } from "react-i18next";
import NetlifyForm from 'react-netlify-form';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact-container">
      <NetlifyForm name='contact'>
        {({ loading, error, success }) => (
          <div>
            {loading &&
              <div>{t('contact.loading')}</div>
            }
            {error &&
              <div>{t('contact.error')}</div>
            }
            {success &&
              <div>{t('contact.success')}</div>
            }
            {!loading && !success &&
              <form className="contact-container-form">
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
            }
          </div>
        )}
      </NetlifyForm>
    </div>
  );
}
