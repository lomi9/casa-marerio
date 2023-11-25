import React from 'react';
import { useTranslation } from "react-i18next";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
    const { t } = useTranslation();

    const policyData = t('policy', { returnObjects: true });

    const renderArticles = (section) => {
        return Object.keys(section).map((key, index) => {
            if (key !== 'sectiontitle') {
                return (
                    <article key={index}>
                        <h3>{section[key].articletitle}</h3>
                        <p>{section[key].content}</p>
                    </article>
                );
            }
            return null;
        });
    };
    
    return (
        <>
        <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        </Helmet>
            <header>
                <Navbar/>
            </header>
            <section className="policy__section">
                <h1 className="policy__section-title">{policyData.title}</h1>
                {Object.keys(policyData).map((key, index) => {
                    if (key.startsWith('section')) {
                        const section = policyData[key];
                        return (
                            <div className="policy__section-article" key={index}>
                                <h2 className="policy__section-article-title">{section.sectiontitle}</h2>
                                {renderArticles(section)}
                            </div>
                        );
                    }
                    return null;
                })}
            </section>
            <Footer/>
        </>
    );
}
