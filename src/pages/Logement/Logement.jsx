import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCertificate, faHouse, faKey, faLock, faPerson, faShop, faUmbrellaBeach, faWater, faWaterLadder, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-regular-svg-icons';

import Navbar from "../../Components/Navbar/Navbar";
import Galerie from "../../Components/Galerie/Galerie";
import Equipments from '../../Components/Equipments/Equipments';
import Title from '../../Components/Title/Title';
import Footer from '../../Components/Footer/Footer';

import galerieChambre1 from "../../assets/portimao-chambre-1.jpeg";
import galerieCuisine1 from "../../assets/portimao-cuisine-1.jpeg";
import galerieSalon2 from "../../assets/portimao-salon-2.jpeg";
import galerieVue1 from "../../assets/portimao-vue-marina-1.jpeg";
import galerieDouche from "../../assets/portimao-douche.jpeg";
import galerieHall from "../../assets/portimao-hall.jpeg";
import ReserverBtn from '../../Components/ReserverBtn/ReservezBtn';


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