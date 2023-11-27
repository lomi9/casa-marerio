import { useEffect } from 'react';

export default function SirvoyReviewWidget() {
  useEffect(() => {



    const script = document.createElement('script');
    
    script.src = "https://secured.sirvoy.com/widget/sirvoy.js";
    script.async = true;
    script.setAttribute('data-form-id', 'b8c91a742d2cbc0d');
    script.dataset.widget = "review";

    const scriptContainer = document.getElementById('sirvoy-review-script-container');
    if (scriptContainer) {
      scriptContainer.appendChild(script);

      return () => {
        scriptContainer.removeChild(script);
      }
    }
  }, []); 

  return null;
}

