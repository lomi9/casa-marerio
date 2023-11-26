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
          <title>{t('helmet.blog.title')}</title>
                <meta name="description" content={t('blog.home.description')} />

                <meta property="og:title" content={t('helmet.blog.ogtitle')} />
                <meta property="og:description" content={t('helmetblog.ogdescription')} />
                <meta property="og:image" content="URL_de_l'image" />
                <meta property="og:url" content="URL_de_la_page_de_blog" />
                <meta property="og:type" content="website" />

                {/* Balises Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t('helmet.blog.title')} />
                <meta name="twitter:description" content={t('helmet.blog.description')} />
                <meta name="twitter:image" content="URL_de_l'image" />
                <script type="application/ld+json">
                {`
                  {
                    "@context": "https://schema.org",
                    "@type": "Blog",
                    "headline": "${t('blog.home.title1')}",
                    "description": "${t('blog.home.subtitle1')}",
                    "image": "https://www.casa-marerio.com/assets/portimao-mer-rochers.webp",
                    "author": {
                      "@type": "Person",
                      "name": "Casa-Marerio"
                    },
                    "publisher": {
                      "@type": "Organization",
                      "name": "Casa-Marerio",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.casa-marerio.com/assets/logo-contact.png"
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