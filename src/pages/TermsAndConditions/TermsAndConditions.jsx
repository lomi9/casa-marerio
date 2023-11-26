import React from 'react';
import { useTranslation } from "react-i18next";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Helmet } from 'react-helmet-async';

export default function TermsAndConditions() {
  const { t } = useTranslation();
  const conditions = t("conditions", { returnObjects: true });

  const renderArticles = () => {
    return Object.keys(conditions).map((key) => {
      const article = conditions[key];
      return (
        <article key={key} className="conditions__section-article">
          <h2 className="conditions__section-article-title">{article.title}</h2>
          <p className="conditions__section-article-text">{article.content}</p>
        </article>
      );
    });
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <header>
        <Navbar />
      </header>
      <section className="conditions__section">
        <h1 className="conditions__section-title">{t('conditions.title')}</h1>
        {renderArticles()}
      </section>
      <Footer />
    </>
  );
}
