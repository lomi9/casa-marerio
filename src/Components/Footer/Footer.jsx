import { useTranslation } from "react-i18next";
import Logo from "../../assets/logo-casa-marerio-grand.png";


export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <div className="footer__content">
              <img src={Logo} alt="logo" className='footer__content-logo'/>
            </div>
            <div className="footer__bottom">
                <p className="footer__bottom-p">{t('footer.text')}</p>
            </div>
        </footer>
    );
}
