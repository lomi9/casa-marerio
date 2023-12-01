import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";

export default function ReserverBtn({ scrolling }) { 

    const { t } = useTranslation();

    return (
        <div className="nav__actionCall"> 
          <Link to="/reservation" className="nav__actionCall-link">
            <button className={`nav__actionCall-link-btn ${scrolling ? "scrolling" : ""}`}>
              {t("navbar.button")}
            </button>
          </Link>
        </div>
    );
}
