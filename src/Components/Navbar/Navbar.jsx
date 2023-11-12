import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import logo_navbar from "../../assets/logo-casa-marerio-tranparant.png";
import logo_transparent from "../../assets/logo-casa-marerio-tranparant.png";
import logo_scroll from "../../assets/logo-casa-marerio-scroll.png"
import ReserverBtn from "../../Components/ReserverBtn/ReservezBtn";



export default function Navbar() {
  const { t } = useTranslation();

  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };
  


  useEffect(() => {
    const onScroll = () => {

      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

const toggleMobileMenu = () => {
  setMobileMenuOpen(!mobileMenuOpen);
};

const { i18n } = useTranslation();

const handleLanguageChange = (event) => {
  i18n.changeLanguage(event.target.value);
};



    return (
      <div className={`navbar ${scrolling ? "scrolling" : ""}`}>

        <div className="navbar__menu">
          <button className="navbar__menu-button" onClick={toggleMobileMenu}>
          ☰ 
          </button>
        </div>

        <nav className={`nav__items ${mobileMenuOpen ? "open" : ""}`}>

          <div className={`nav__items-language-dropdown ${scrolling ? "scrolling" : ""}`}>
            <select value={i18n.language} onChange={handleLanguageChange}>
              <option value="fr" className="nav__items-language-dropdown-value">FR 🇫🇷</option>
              <option value="en" className="nav__items-language-dropdown-value">ENG 🇬🇧</option>
              <option value="pt" className="nav__items-language-dropdown-value">PT 🇵🇹</option>
            </select>
          </div>

          <Link to="/" className={`nav__items-item ${scrolling ? "scrolling" : ""}`} onClick={handleMenuItemClick}>{t('navbar.nav.item1')}</Link>
          <Link to="/logement" className={`nav__items-item ${scrolling ? "scrolling" : ""}`} onClick={handleMenuItemClick}>{t('navbar.nav.item2')}</Link>
          <Link to="/blog" className={`nav__items-item ${scrolling ? "scrolling" : ""}`} onClick={handleMenuItemClick} >{t('navbar.nav.item3')}</Link>
          <div className="reserverBtnMobile">
          <ReserverBtn scrolling={scrolling} />
          </div>
        </nav>
        
        <div className="nav__logo">
          <Link to="/" className="nav__logo-link">
            <img
              src={scrolling ? logo_navbar : logo_scroll}
              className="nav__logo-link-img"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="reserverBtnDesktop">
          <ReserverBtn/>
          </div>
      </div>
    );
    }
