import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";


export default function Banner() {

  const { t } = useTranslation();

    return (

      <div className="banner__div">
        <h1 className="banner__div-h1"> {t('banner.title')}</h1>
        <div className="banner__div-scroll">
<a href='#content' className="banner__div-scroll-p"> {t('banner.scroll')}</a>
<a href='#content'><FontAwesomeIcon icon={faAngleDown} bounce className="banner__div-scroll-fleche" /></a>
        </div>
      </div>
    );
    }