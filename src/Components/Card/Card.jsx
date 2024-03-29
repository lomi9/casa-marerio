import { Link } from "react-router-dom";

const Card = ({ cardBackground, title, buttonText, destination }) => {
    
    return (
        <Link to={destination} className="card">
            <div className="card__image" style={{ backgroundImage: `url(${cardBackground})` }}>

            </div>
            <div className="card__overlay">
                <div className="card__overlay-div"> 
                    <h3 className="card__overlay-div-title">{title}</h3>
                    <button className="card__overlay-div-button" data-aos="fade-up">{buttonText}</button>
                </div>
            </div>
        </Link>
    );
};

export default Card;
