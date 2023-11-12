import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle from './BlogArticle';

const BlogSection = ({ section }) => {

    const { t } = useTranslation();

    const articles = t(`blog.articles.${section}`, { returnObjects: true });

  return (
    <section className="blog__section">
       {Object.entries(articles).map(([articleId, article]) => (
                <BlogArticle key={articleId} article={article} />
            ))}
    </section>
  );
};

export default BlogSection;
