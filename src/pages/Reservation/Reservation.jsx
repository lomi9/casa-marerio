import { useTranslation } from 'react-i18next';
import Navbar from '../../Components/Navbar/Navbar';
import Title from '../../Components/Title/Title';
import SirvoyWidget from '../../Components/widget';
import Footer from '../../Components/Footer/Footer';
import Contact from '../../Components/Contact/Contact';
import Logo from '../../Components/Logo/logo';
import SirvoyReviewWidget from '../../Components/SirvoyReviewWidget';


export default function Reservation () {

  const { t } = useTranslation();

  return (
    <>
    <header>
        <Navbar/>
    </header>
    <section>
    <Title h2Text={t('reservation.title')} pText={t('reservation.text')} bgColor="defaultColor"/>
    
    <article className="reservation__article1">
      <h3 className="reservation__article1-title">{t('reservation.article1.title')}</h3>
      <ul className="reservation__article1-list">
        <li className="reservation__article1-list-item">{t('reservation.article1.item1')}</li>
        <li className="reservation__article1-list-item">{t('reservation.article1.item2')}</li>
        <li className="reservation__article1-list-item">{t('reservation.article1.item3')}</li>
        <li className="reservation__article1-list-item">{t('reservation.article1.item4')}</li>
        <li className="reservation__article1-list-item">{t('reservation.article1.item5')}</li>
      </ul>

    </article>

    <article id='sirvoy-script-container'>
    <SirvoyWidget/>
    </article>
    <Title h2Text={t('reservation.title2')} pText={t('reservation.text2')} bgColor="blueColor" h2Color='blueColor' pColor='blueColor'/>
    
    <article className="reservation__article2" id="sirvoy-review-script-container">
      <SirvoyReviewWidget/>
    </article>

    <Title h2Text={t('reservation.title3')} pText={t('reservation.text3')} bgColor="blueColor" h2Color='blueColor' pColor='blueColor'/>
    
    <article className="reservation__article3">
      <div className="reservation__article3-div-logo">
        <Logo/>
      </div>
      <div className="reservation__article3-div-contact">
        <Contact/>
      </div>
    </article>
    <Footer/>
    </section>
    </>
  )



}


