import { useEffect } from 'react';

export default function SirvoyWidget() {
  useEffect(() => {
    // Identifier si le script est déjà présent
    const existingScript = document.querySelector('script[src="https://secured.sirvoy.com/widget/sirvoy.js"]');

    if (existingScript) {
      // Si le script existe déjà, retourne immédiatement.
      return;
    }

    // Si le script n'existe pas, créez un nouvel élément script
    const script = document.createElement('script');

    script.src = "https://secured.sirvoy.com/widget/sirvoy.js";
    script.async = true;
    script.setAttribute('data-form-id', '9225da3974b8a662');

    // Cherchez l'élément dans lequel vous voulez insérer le script
    const scriptContainer = document.getElementById('sirvoy-script-container');
    if (scriptContainer) {
      scriptContainer.appendChild(script);

      // Cleanup : Supprimez le script lorsque le composant est démonté.
      return () => {
        scriptContainer.removeChild(script);
      }
    }

  }, []); // Le tableau vide comme deuxième argument signifie que cet effet s'exécute une seule fois, similaire à componentDidMount.

  return null;
}


