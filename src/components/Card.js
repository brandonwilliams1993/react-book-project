import React from "react";
import { Link } from 'react-router-dom';
import "./Card.css";

export const Card = ({
    imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    link,
}) => {

    return (
        <div className="card-container">
            {imgSrc && imgAlt && (
                <img src={imgSrc} alt={imgAlt} className="card-img" />
            )}
            {title && <h1 className="card-title">{title}</h1>}
            {description && <p className="card-description">{description}</p>}
            {buttonText && link && (
                <a href={link} className="card-button-link">
                    <button className="card-button">{buttonText}</button>
                    <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}></Link>
                </a>
            )}
        </div>
    );
};

export default Card;
