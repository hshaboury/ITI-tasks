import React from 'react'
import "../App.css"
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
const TeamCard = ({img,name,title}) => {
    return (
        <div className="team-card">
            <img src={img} alt={name} className="img" />
            <h3 className="name">{name}</h3>
            <p className="title">{title}</p>
            <div className="icons">
                <a href="https//www.x.com">
                    <FaTwitter />
                </a>
                <a href="https//www.facebook.com">
                    <FaFacebookF />
                </a>
                <a href="https//www.linkidin.com">
                    <FaLinkedinIn />
                </a>
            </div>
        </div>
    );
}

export default TeamCard