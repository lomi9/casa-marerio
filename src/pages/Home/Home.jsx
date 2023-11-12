import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from 'react-helmet';

import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
import Title from "../../Components/Title/Title";
import Footer from "../../Components/Footer/Footer";
import Contact from "../../Components/Contact/Contact";

import logo from "../../assets/logo-contact.png";
import coquillages from "../../assets/portimao-coquillages.jpeg"
import galerieChambres from "../../assets/portimao-chambre-2.jpeg";
import galeriePlage from "../../assets/portimao-plage-1.jpeg";

export default function Home() {
    const { t } = useTranslation();

return (
    <>
    <Helmet>
                <title>{t('helmet.home.title')}</title>
                <meta name="description" content={t('helmet.home.metacontent1')} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charset="UTF-8" />
                <meta property="og:title" content={t('helmet.home.metacontent2')} />
                <meta property="og:description" content={t('helmet.home.metacontent3')} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.casa-marerio.com/home" />
                <meta property="og:image" content="https://www.casa-marerio.com/portimao-chambre-1.jpeg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.casa-marerio.com/home" />
                <script type="application/ld+json">
    {`
        {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "name": "Casa-Marerio",
            "url": "https://www.casa-marerio.com"
        },
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "casa-Marerio",
            "url": "https://www.casa-marerio.com",
            "logo": "https://www.votre-site.com/path-to-logo.jpg",
            "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@casa-marerio.com",
                "contactType": "customer service"
            }
        },
        {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@id": "https://www.casa-marerio.com",
                    "name": "Home"
                }
            }]
        }
    `}
    </script>
            </Helmet>
    <header className="header">
        <Navbar/>
    </header>
    <main className='main'>
    <section className="banner">
        <Banner/>
    </section>
    <section className="content" id="content">
        <article className="article__cards">
            <Title h2Text={t('home.title1')} pText={t('home.subtitle1')} bgColor="defaultColor"/>
            <div className="article__cards-container" aria-label='Découvrir le logement et découvrir Portimão'>
                <Card cardBackground={galerieChambres} title={t('home.card1.title')} buttonText={t('home.card1.button')} destination="/logement" />
                <Card cardBackground={galeriePlage} title={t('home.card2.title')} buttonText={t('home.card2.button')} destination="/blog"/>
            </div>
        </article>
    
        <article className="article__host">
        <div className="article__host-title">
            <Title h2Text={t('home.title2')} pText={t('home.subtitle2')} bgColor="defaultColor"/>
        </div>
            <div className="article__host-img" data-aos="fade-up"  aria-label="Coquillages sur la plage de Portimão" style={{
                    backgroundImage: `url(${coquillages})`
                }}>
            </div>
            <div className="article__host-text">
                <h4 className="article__host-text-h4" data-aos="fade-left"> {t('home.hostQuestion')} <FontAwesomeIcon icon={faQuestion} bounce className="questionIcon"/></h4>
                <p className="article__host-text-p" data-aos="fade-up">{t('home.hostDescription')} </p>
            </div>

        </article>
        <article className="article__contact">
            <div className="article__contact-content">
                <h5 className="article__contact-content-h5" data-aos="fade-right">{t('home.contactQuestion')}</h5>
                <div classsName="article__contact-content-logo" data-aos="flip-left"><img src={logo} className="logo-contact" alt="logo casa-marerio"/></div>
            </div>
            <div className="article__contact-form">
                <Contact/>
            </div>
        </article>
        <Footer/>
    </section>
    </main>
    </>
)
}