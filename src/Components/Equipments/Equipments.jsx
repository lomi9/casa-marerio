import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { faCaretDown, faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import RoomEquipments from '../RoomEquipments/RoomEquipments';

import salonImg from "../../assets/portimao-salon-2.webp";
import vueMerImg from "../../assets/portimao-vue-mer-1.webp";
import salonImg2 from "../../assets/portimao-salon-1.webp";
import cuisineImg1 from "../../assets/portimao-cuisine-2.webp";
import cuisineImg2 from "../../assets/portimao-cuisine-1.webp";
import cuisineImg3 from "../../assets/portimao-salades.webp"
import chambreImg1 from "../../assets/portimao-chambre-1.webp";
import chambreImg2 from "../../assets/portimao-chambre-3.webp";
import chambreImg3 from "../../assets/portimao-chambre-4.webp";
import doucheImg from "../../assets/portimao-douche.webp";
import bougieImg from "../../assets/portimao-bougie.webp";
import sableImg from "../../assets/portimao-sable.webp";
import piscineImg from "../../assets/portimao-piscine-1.webp";
import residenceImg from "../../assets/portimao-hall.webp";
import vueMarina from "../../assets/portimao-vue-marina-1.webp";
import vueImg from "../../assets/portimao-vue2.webp";
import fleursImg from "../../assets/portimao-fleurs.webp";
import chateauImg from "../../assets/portimao-chateau.webp";


export default function Equipments () {

  const [selected, setSelected] = useState(0);

  const { t } = useTranslation();

  const sections = [
    { title: t('equipments.item1.title'), content: <RoomEquipments imageSrc1={salonImg} imageSrc2={vueMerImg} imageSrc3={salonImg2} title2={t('equipments.item1.title2')} li1={t('equipments.item1.li1')} li2={t('equipments.item1.li2')} li3={t('equipments.item1.li3')} li4={t('equipments.item1.li4')}/> },
    { title: t('equipments.item2.title'), content: <RoomEquipments imageSrc1={cuisineImg1} imageSrc2={cuisineImg3} imageSrc3={cuisineImg2} title2={t('equipments.item2.title2')} li1={t('equipments.item2.li1')} li2={t('equipments.item2.li2')} li3={t('equipments.item2.li3')} li4={t('equipments.item2.li4')} li5={t('equipments.item2.li5')} li6={t('equipments.item2.li6')} li7={t('equipments.item2.li7')} li8={t('equipments.item2.li8')} li9={t('equipments.item2.li9')} li10={t('equipments.item2.li10')} li11={t('equipments.item2.li11')}/> },
    { title: t('equipments.item3.title'), content: <RoomEquipments imageSrc1={chambreImg1} imageSrc2={chambreImg3} imageSrc3={chambreImg2} title2={t('equipments.item3.title2')} li1={t('equipments.item3.li1')} li2={t('equipments.item3.li2')} li3={t('equipments.item3.li3')} li4={t('equipments.item3.li4')} li5={t('equipments.item3.li5')} li6={t('equipments.item3.li6')} li7={t('equipments.item3.li7')} li8={t('equipments.item3.li8')}   /> },
    { title: t('equipments.item4.title'), content: <RoomEquipments imageSrc1={doucheImg} imageSrc2={bougieImg} imageSrc3={sableImg} title2={t('equipments.item4.title2')} li1={t('equipments.item4.li1')} li2={t('equipments.item4.li2')} li3={t('equipments.item4.li3')} li4={t('equipments.item4.li4')} li5={t('equipments.item4.li5')}/> },
    { title: t('equipments.item5.title'), content: <RoomEquipments imageSrc1={piscineImg} imageSrc2={residenceImg} imageSrc3={vueMarina} title2={t('equipments.item5.title2')} li1={t('equipments.item5.li1')} li2={t('equipments.item5.li2')} li3={t('equipments.item5.li3')} li4={t('equipments.item5.li4')} li5={t('equipments.item5.li5')} li6={t('equipments.item5.li6')} li7={t('equipments.item5.li7')} li8={t('equipments.item5.li8')} li9={t('equipments.item5.li9')} li10={t('equipments.item5.li10')} li11={t('equipments.item5.li11')}/> },
    { title: t('equipments.item6.title'), content: <RoomEquipments imageSrc1={vueImg} imageSrc2={fleursImg} imageSrc3={chateauImg} title2={t('equipments.item6.title2')} li1={t('equipments.item6.li1')} li2={t('equipments.item6.li2')} li3={t('equipments.item6.li3')} li4={t('equipments.item6.li4')} li5={t('equipments.item6.li5')} li6={t('equipments.item6.li6')}/> },
  ];

  const goToPreviousItem = () => {
    setSelected((prevSelected) => (prevSelected - 1 + sections.length) % sections.length);
  };

  const goToNextItem = () => {
    setSelected((prevSelected) => (prevSelected + 1) % sections.length);
  };

  return (
    <div className="menu-container">
      <div className="menu-items">
      <FontAwesomeIcon icon={faArrowLeftLong} className="nav-arrow left" onClick={goToPreviousItem} />
        {sections.map((section, index) => (
          <div
            key={index}
            className={`item ${selected === index ? 'active' : ''}`}
            onClick={() => setSelected(index)}
          >
            {section.title}
            {selected === index && <FontAwesomeIcon icon={faCaretDown} className="angle-icon" data-aos="fade-down"/>}
          </div>
        ))}
        <FontAwesomeIcon icon={faArrowRightLong} className="nav-arrow right" onClick={goToNextItem} />
      </div>
      {selected !== null && (
        <div className="section-content" key={selected}>
          {sections[selected].content}
        </div>
      )}
    </div>
  );
}


