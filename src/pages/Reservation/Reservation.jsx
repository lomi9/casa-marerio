import { useTranslation } from 'react-i18next';
import Navbar from '../../Components/Navbar/Navbar';
import Title from '../../Components/Title/Title';
import SirvoyWidget from '../../Components/widget';
import Footer from '../../Components/Footer/Footer';
import Contact from '../../Components/Contact/Contact';
import Logo from '../../Components/Logo/logo';


export default function Reservation () {

  const { t } = useTranslation();

  return (
    <>
    <header>
        <Navbar/>
    </header>
    <section>
    <Title h2Text={t('reservation.title')} pText={t('reservation.text')} bgColor="defaultColor"/>
    <article id='sirvoy-script-container'>
    <SirvoyWidget/>
    </article>
    <Title h2Text={t('reservation.title2')} pText={t('reservation.text2')} bgColor="blueColor" h2Color='blueColor' pColor='blueColor'/>
    <article className="reservation__article2">
      <div className="reservation__article2-div-logo">
        <Logo/>
      </div>
      <div className="reservation__article2-div-contact">
        <Contact/>
      </div>
    </article>
    <Footer/>
    </section>
    </>
  )



}


