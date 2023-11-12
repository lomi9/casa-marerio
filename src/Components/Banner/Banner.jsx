import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";


export default function Banner() {

  const { t } = useTranslation();

    return (

      <div className="banner__div">
        <h1 className="banner__h1"> {t('banner.title')}</h1>
        <div className="banner__scroll">
<a href='#content' className="banner__scroll-p"> {t('banner.scroll')}</a>
<a href='#content'><FontAwesomeIcon icon={faAngleDown} bounce className="banner__scroll-fleche" /></a>
        </div>
      </div>
    );
    }