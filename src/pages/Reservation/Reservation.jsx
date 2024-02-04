import { useTranslation } from 'react-i18next';
import Navbar from '../../Components/Navbar/Navbar';
import Title from '../../Components/Title/Title';
import SirvoyWidget from '../../Components/widget';
import Footer from '../../Components/Footer/Footer';
import Contact from '../../Components/Contact/Contact';
import Logo from '../../Components/Logo/logo';
import SirvoyReviewWidget from '../../Components/SirvoyReviewWidget';
import Collapse from '../../Components/Collapse/Collapse';


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
    <Collapse title={t('reservation.article1.collapse1.title')}>
        <ul className='reservation__article1-list'>
          <li className='reservation__article1-list-item'>{t('reservation.article1.collapse1.item1')}</li>
          <li className='reservation__article1-list-item'>{t('reservation.article1.collapse1.item2')}</li>
          <li className='reservation__article1-list-item'>{t('reservation.article1.collapse1.item3')}</li>
          <li className='reservation__article1-list-item'>{t('reservation.article1.collapse1.item4')}</li>
        </ul>
      </Collapse>

      <Collapse title={t('reservation.article1.collapse2.title')}>
      <ul className='reservation__article1-list'>
          <li className='reservation__article1-list-item'>{t('reservation.article1.collapse2.item1')}</li>
          <li className='reservation__article1-list-item'>{t('reservation.article1.collapse2.item2')}</li>
        </ul>
      </Collapse>

      <Collapse title={t('reservation.article1.collapse3.title')}>
      <ul className='reservation__article1-list'>
          <li className='reservation__article1-list-item'>{t('reservation.article1.collapse3.item1')}</li>
          <li className='reservation__article1-list-item'>{t('reservation.article1.collapse3.item2')}</li>
          <li className='reservation__article1-list-item'>{t('reservation.article1.collapse3.item3')}</li>
        </ul>
      </Collapse>

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


