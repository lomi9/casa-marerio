import { useEffect } from 'react';

export default function SirvoyWidget() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://secured.sirvoy.com/widget/sirvoy.js"]');

    if (existingScript) {
      return;
    }

    const script = document.createElement('script');

    script.src = "https://secured.sirvoy.com/widget/sirvoy.js";
    script.async = true;
    script.setAttribute('data-form-id', 'b8c91a742d2cbc0d');

    const scriptContainer = document.getElementById('sirvoy-script-container');
    if (scriptContainer) {
      scriptContainer.appendChild(script);

      return () => {
        scriptContainer.removeChild(script);
      }
    }

  }, []); 

  return null;
}


