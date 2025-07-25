import React from 'react'
import "../App.css"

const PortfolioCard = ({ img, title, category }) => {
    return (
        <div className="portfolio-card">
            <img src={img} alt={title} className="img" />
            <div className="txt">
                <h3 className="title">{title}</h3>
                <p className="category">{category}</p>
            </div>
        </div>
    );
};

export default PortfolioCard