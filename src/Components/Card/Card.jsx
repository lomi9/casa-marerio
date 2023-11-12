import { Link } from "react-router-dom";

const Card = ({ cardBackground, title, buttonText, destination }) => {
    
    return (
        <Link to={destination} className="card-container">
            <div className="card-image" style={{ backgroundImage: `url(${cardBackground})` }}></div>
            <div className="card-overlay">
                <div className="card-div"> 
             <h3 className="card-title"data-aos="fade-up">{title}</h3>
            <button className="card-button" data-aos="fade-up">{buttonText}</button>
            </div>
            </div>
        </Link>
    );
};

export default Card;
