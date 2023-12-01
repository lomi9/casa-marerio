import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Galerie ({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div className="galerie__container">
            <FontAwesomeIcon icon={faAngleLeft} onClick={goToPrevious} className="galerie-arrow left" />
            <FontAwesomeIcon icon={faAngleRight} onClick={goToNext} className="galerie-arrow right" />
            <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})`}}
            className="galerie__container-slides"
            >
            </div>
            <div className="div__dots">
                {slides.map ((slide, slideIndex) => (
                    <div key={slideIndex} className={`dots ${slideIndex === currentIndex ? 'active-dot' : ''}`} onClick={() => goToSlide(slideIndex)}>•</div>
                ))}
            </div>
        </div>
    )

}
