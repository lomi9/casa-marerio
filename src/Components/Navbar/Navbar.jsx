import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Select from 'react-select';

import logo_navbar from "../../assets/logo-casa-marerio-tranparant.png";
import logo_scroll from "../../assets/logo-casa-marerio-scroll.png";
import ReserverBtn from "../../Components/ReserverBtn/ReservezBtn";
import flagFR from "../../assets/france-flag.png";
import flagEN from "../../assets/gb-flag.png";
import flagPT from "../../assets/pt.webp";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const menuRef = useRef();

  useEffect(() => {
    setSelectedLanguage(i18n.language); 

    const handleLanguageChange = (lng) => setSelectedLanguage(lng);
    i18n.on('languageChanged', handleLanguageChange);

    document.addEventListener("mousedown", handleClickOutside);
    const onScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", onScroll);
    };
  }, [i18n]);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMobileMenuOpen(false);
    }
  };

  const languageOptions = [
    { value: 'fr', label: <><img src={flagFR} alt="FR" className="flag-icon" /> FR</> },
    { value: 'en', label: <><img src={flagEN} alt="ENG" className="flag-icon" /> ENG</> },
    { value: 'pt', label: <><img src={flagPT} alt="PT" className="flag-icon" /> PT</> }
  ];

  const handleMenuItemClick = () => setMobileMenuOpen(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const handleLanguageChange = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  return (
    <div className={`navbar ${scrolling ? "scrolling" : ""}`}>
      <div className="navbar__menu">
        <button className="navbar__menu-button" onClick={toggleMobileMenu}>☰</button>
      </div>

      <nav ref={menuRef} className={`nav__items ${mobileMenuOpen ? "open" : ""}`}>
        <div className={`nav__items-language-dropdown ${scrolling ? "scrolling" : ""}`}>
          <Select 
            options={languageOptions} 
            value={selectedLanguage ? languageOptions.find(option => option.value === selectedLanguage) : null}
            onChange={handleLanguageChange}
            className="nav__items-language-dropdown-select"
            classNamePrefix="react-select"
          />
        </div>

        <Link to="/" className={`nav__items-item ${scrolling ? "scrolling" : ""}`} onClick={handleMenuItemClick}>{t('navbar.nav.item1')}</Link>
        <Link to="/logement" className={`nav__items-item ${scrolling ? "scrolling" : ""}`} onClick={handleMenuItemClick}>{t('navbar.nav.item2')}</Link>
        <Link to="/blog" className={`nav__items-item ${scrolling ? "scrolling" : ""}`} onClick={handleMenuItemClick}>{t('navbar.nav.item3')}</Link>
        <div className="reserverBtnMobile">
          <ReserverBtn scrolling={scrolling} />
        </div>
      </nav>
      
      <div className="nav__logo">
        <Link to="/" className="nav__logo-link">
          <img src={scrolling ? logo_navbar : logo_scroll} className="nav__logo-link-img" alt="Logo" />
        </Link>
      </div>
      <div className="reserverBtnDesktop">
        <ReserverBtn />
      </div>
    </div>
  );
}
