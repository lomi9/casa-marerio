import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

export default function ErrorPage() {
    const { t } = useTranslation();

    return(
        <div >
            Erreur !
      </div>
    );
}