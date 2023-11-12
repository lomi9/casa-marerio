import { useTranslation } from 'react-i18next';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Title from "../../Components/Title/Title";
import BlogNavbar from '../../Components/Blog/BlogNavbar';

export default function Blog() {
    const { t } = useTranslation();

    return(
    <>
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