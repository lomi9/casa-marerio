import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { faCaretDown, faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import BlogSection from './BlogSection';


export default function BlogNavbar() {

    const [selected, setSelected] = useState(0);

  const { t } = useTranslation();

  const sections = [
    { title: t('blog.navbar.item1.title1'), section : 'section1' },
    { title: t('blog.navbar.item2.title1'), section : 'section2' },
    { title: t('blog.navbar.item3.title1'), section : 'section3' },
    { title: t('blog.navbar.item4.title1'), section : 'section4' },
  ];

  const goToPreviousItem = () => {
    setSelected((prevSelected) => (prevSelected - 1 + sections.length) % sections.length);
  };

  const goToNextItem = () => {
    setSelected((prevSelected) => (prevSelected + 1) % sections.length);
  };

  return (
    <div className="blog__navbar-container">
      <div className="blog__navbar-menu">
      <FontAwesomeIcon icon={faArrowLeftLong} className="nav-arrow left" onClick={goToPreviousItem} />
        {sections.map((section, index) => (
          <div
            key={index}
            className={`blog__navbar-menu-item ${selected === index ? 'active' : ''}`}
            onClick={() => setSelected(index)}
          >
            {section.title}
            {selected === index && <FontAwesomeIcon icon={faCaretDown} className="angle-icon" data-aos="fade-down"/>}
          </div>
        ))}
        <FontAwesomeIcon icon={faArrowRightLong} className="blog__navbar-menu-arrow right" onClick={goToNextItem} />
      </div>
      {selected !== null && (
        <div className="blog__navbar-section" key={selected}>
          <BlogSection section={sections[selected].section}/>
        </div>
      )}
    </div>
  );

}