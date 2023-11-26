import React from 'react';
import { useTranslation } from 'react-i18next';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '', loading: false, error: null, success: false };
  }

  // Cette méthode encode les données du formulaire en format URL-encoded
  encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  // Gère la soumission du formulaire
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    const { name, email, message } = this.state;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({ 'form-name': 'contact', name, email, message })
    })
      .then(() => this.setState({ success: true }))
      .catch((error) => this.setState({ error }));

    this.setState({ loading: false });
  };

  // Met à jour l'état local lors de la saisie de l'utilisateur
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message, loading, error, success } = this.state;
    const { t } = this.props.useTranslation;

    return (
      <div className="contact-container">
        <form onSubmit={this.handleSubmit} name="contact" method="POST" data-netlify="true" className="contact-container-form">
          <input type="hidden" name="form-name" value="contact" />
          
          {loading && <div>{t('contact.loading')}</div>}
          {error && <div>{t('contact.error')}</div>}
          {success && <div>{t('contact.success')}</div>}
          
          <div className="input-group">
            <label htmlFor="name">{t('contact.form.name')}</label>
            <input type="text" id="name" name="name" value={name} required onChange={this.handleChange} />
          </div>
          
          <div className="input-group">
            <label htmlFor="email">{t('contact.form.email')}</label>
            <input type="email" id="email" name="email" value={email} required onChange={this.handleChange} />
          </div>
          
          <div className="input-group">
            <label htmlFor="message">{t('contact.form.message')}</label>
            <textarea id="message" name="message" rows="4" value={message} required onChange={this.handleChange}></textarea>
          </div>
          
          <div className="input-group button__div">
            <button type="submit">{t('contact.button')}</button>
          </div>
        </form>
      </div>
    );
  }
}

// Pour utiliser le hook useTranslation dans un composant de classe, vous devez le faire à l'extérieur de la classe et passer t comme prop.
function ContactWithTranslation() {
  const { t } = useTranslation();

  return <Contact useTranslation={t} />;
}

export default ContactWithTranslation;
