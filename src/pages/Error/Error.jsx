import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons'; 
import Logo from '../../Components/Logo/logo';

export default function ErrorPage() {
    const { t } = useTranslation();

    return(
        <div className="error__container">
        <h1 className="error__container-title">{t('errorPage.title')} <FontAwesomeIcon icon={faExclamation} bounce className='error__container-title-bounce'/></h1>
        <p className="error__container-text">{t('errorPage.description')}</p>
        <div className="error__container-link"><Link to="/" className="error__container-link-text">{t('errorPage.homeLink')}</Link></div>
        <div>
          <Logo/>
        </div>
      </div>
    );
}