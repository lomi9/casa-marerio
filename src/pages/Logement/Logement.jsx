import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCertificate, faHouse, faKey, faPerson, faShop, faUmbrellaBeach, faWater, faWaterLadder, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-regular-svg-icons';
import { Helmet } from 'react-helmet-async';

import Navbar from "../../Components/Navbar/Navbar";
import Galerie from "../../Components/Galerie/Galerie";
import Equipments from '../../Components/Equipments/Equipments';
import Title from '../../Components/Title/Title';
import Footer from '../../Components/Footer/Footer';

import galerieChambre1 from "../../assets/portimao-chambre-1.webp";
import galerieCuisine1 from "../../assets/portimao-cuisine-1.webp";
import galerieSalon2 from "../../assets/portimao-salon-2.webp";
import galerieVue1 from "../../assets/portimao-vue-marina-1.webp";
import galerieDouche from "../../assets/portimao-douche.webp";
import galerieHall from "../../assets/portimao-hall.webp";


export default function Logement() {
    const { t } = useTranslation();

    const slides = [
        { url: galerieChambre1, title: "Chambre"}, 
        { url: galerieCuisine1, title: "Cuisine"},
        { url: galerieSalon2, title: "Salon"},
        { url: galerieVue1, title: "Vue"}, 
        { url: galerieDouche, title: "Salle de douche"}, 
        { url: galerieHall, title: "Hall de la résidence"}, 
    ]

return (
    <>
    <Helmet>
                <title>{t('helmet.logement.title')}</title>
                <meta name="description" content={t('helmet.logement.description')} />
                <meta property="og:title" content={t('helmet.logement.ogtitle')} />
                <meta property="og:description" content={t('helmet.logement.ogdescription')} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.casa-marerio.com/logement" />
                <meta property="og:image" content="https://www.casa-marerio.com/assets/portimao-chambre-1.webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.casa-marerio.com/logement" />
                <script type="application/ld+json">
{`
  "@context": "https://schema.org",
  "@type": "Accommodation",
  "name": "Casa-Marerio",
  "description": "Logement de vacances pour 4 personnes, avec vue sur la mer et sur la marina, entièrement équipé. ",
  "image": "https://www.casa-marerio.com/assets/portimao-chambre-1.webp",
  "address": {
    "@type": "Rua Engenheiro José de Bívar",
    "streetAddress": "Adresse de la rue",
    "addressLocality": "Portimão",
    "addressRegion": "Algarve",
    "postalCode": "8500-802",
    "addressCountry": "Portugal"
  },
  "additionalType": "https://schema.org/Apartment",
  `
}
</script>
            </Helmet>
    <header className='header'>
    <Navbar/>
    </header>
    <section className='content__logement'>
    <Title h2Text={t('logement.title')} pText={t('logement.text')}/>
    <article className='article__logement'>
        <div className='article__logement-content'>
        <div className='article__logement-content-description'>
            <ul className='list' data-aos="fade-right">
                <li className='list__item' ><FontAwesomeIcon icon={faHouse} className='list__item-icon'/>{t('logement.list.item1')}</li>
                <li className='list__item' ><FontAwesomeIcon icon={faPerson} className='list__item-icon'/>{t('logement.list.item2')}</li>
                <li className='list__item' ><FontAwesomeIcon icon={faWater} className='list__item-icon'/>{t('logement.list.item3')}</li>
                <li className='list__item' ><FontAwesomeIcon icon={faKey} className='list__item-icon'/>{t('logement.list.item4')}</li>
                <li className='list__item' ><FontAwesomeIcon icon={faWaterLadder} className='list__item-icon'/>{t('logement.list.item5')}</li>
                <li className='list__item' ><FontAwesomeIcon icon={faCar} className='list__item-icon'/>{t('logement.list.item6')}</li>
                <li className='list__item' ><FontAwesomeIcon icon={faWifi} className='list__item-icon'/>{t('logement.list.item7')}</li>
                <li className='list__item' ><FontAwesomeIcon icon={faCertificate} className='list__item-icon'/>{t('logement.list.item8')}</li>
                <li className='list__item' ><FontAwesomeIcon icon={faUmbrellaBeach} className='list__item-icon'/>{t('logement.list.item9')}</li>
                <li className='list__item' ><FontAwesomeIcon icon={faShop} className='list__item-icon'/>{t('logement.list.item10')}</li>
                <li className='list__item' ><FontAwesomeIcon icon={faSnowflake} className='list__item-icon'/>{t('logement.list.item11')}</li>
            
            </ul>
        </div>
        <div className="article__logement-content-galerie">
        <Galerie slides={slides} />
        </div>
        </div>
    </article>
    <article>
        <Equipments/>
    </article>
    </section>
    <Footer/>
    </>
);
}