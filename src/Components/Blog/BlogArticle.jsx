import { useTranslation } from 'react-i18next';
import React from 'react';

const BlogArticle = ({ article }) => {
    const { t } = useTranslation();
    const imagePath = t(article.image);
  

    return (
    <>
        <article className="blog__article">
            <h3 className='blog__article-title'>{t(article.title)}</h3>
            <div className='blog__article-content'>
                <div className='blog__article-content-imgcontainer'>
                <img className='blog__article-content-img' src={imagePath} alt={t(article.title)} data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"/>
               </div>
                <div className='blog__article-content-text'>
                    <p className='blog__article-content-text-p'>{t(article.text)}</p>
                    {article.url && <a href={t(article.url)} target="_blank" rel="noopener noreferrer" className='blog__article-content-text-link'>{t(article.texturl)}</a>}
                </div>
            </div>
        </article>
        {article.url && <a href={t(article.url)} target="_blank" rel="noopener noreferrer" className='blog__article-content-text-link-mobile'>{t(article.texturl)}</a>}
        <div className='underline' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" ></div>
    </>
    );
};
  
  export default BlogArticle;
    