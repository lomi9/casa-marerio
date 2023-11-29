import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="collapse-button" onClick={toggle}>
        <h3 className="collapse-button-title">{title}</h3>
        <FontAwesomeIcon icon={faAngleDown} className={`icon ${isOpen ? 'open' : ''}`} />
      </div>
      <div className="collapse-content">{children}</div>
    </div>
  );
}

