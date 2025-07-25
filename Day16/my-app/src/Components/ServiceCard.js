import React from 'react'
import "../App.css"

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="service-card">
            <div className="icon">{icon}</div>
            <h3 className="service-title">{title}</h3>
            <p className="service-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing <br />
                elit.Quaerat molestiae quae modi tempore aliquid<br />
                excepturi deserunt delectus 
            </p>
        </div>
    );
};

export default ServiceCard