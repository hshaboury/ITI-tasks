import React from "react";
import "../App.css";

const SectionHeader = ({ title, subtitle }) => {
    return (
        <div className="section-header">
            <h2>{title}</h2>
            <p>lorem ipsum dolor sit amet consectetur.</p>
        </div>
    );
};

export default SectionHeader;
