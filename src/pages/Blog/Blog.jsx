import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Title from "../../Components/Title/Title";
import BlogNavbar from '../../Components/Blog/BlogNavbar';

export default function Blog() {
    const { t } = useTranslation();

    return(
    <>
    <Helmet>
          {/* Balises Meta pour SEO */}
          <title>{t('blog.home.title')}</title>
                <meta name="description" content={t('blog.home.description')} />

                {/* Balises Open Graph */}
                <meta property="og:title" content={t('blog.home.title')} />
                <meta property="og:description" content={t('blog.home.description')} />
                <meta property="og:image" content="URL_de_l'image" />
                <meta property="og:url" content="URL_de_la_page_de_blog" />
                <meta property="og:type" content="website" />

                {/* Balises Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t('blog.home.title')} />
                <meta name="twitter:description" content={t('blog.home.description')} />
                <meta name="twitter:image" content="URL_de_l'image" />
                <script type="application/ld+json">
                {`
                  {
                    "@context": "https://schema.org",
                    "@type": "Blog",
                    "headline": "${t('blog.home.title1')}",
                    "description": "${t('blog.home.subtitle1')}",
                    "image": "https://www.casa-marerio.com/portimao-chambre-1.jpeg",
                    "author": {
                      "@type": "Person",
                      "name": "Casa-Marerio"
                    },
                    "publisher": {
                      "@type": "Organization",
                      "name": "Casa-Marerio",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.votre-site.com/path-to-logo.jpg"
                      }
                    }
                  }
                `}
                </script>
            </Helmet>
    <Navbar/>
    <Title h2Text={t('blog.home.title1')} pText={t('blog.home.subtitle1')} bgColor="defaultColor"/>
<div className='blog__title'>
    <h2 className='blog__title-text'>
{t('blog.home.title3')}
    </h2>
</div>
    <BlogNavbar/>
    <Footer/>
    </>
    );
}