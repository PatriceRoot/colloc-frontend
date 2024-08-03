import React from "react";
import image1 from "../assets/images/house1.jpg";
import image2 from "../assets/images/house2.jpg";
import image3 from "../assets/images/house3.jpg";

const CollocCard = ({ image, title }) => {
  return (
    <div className="colloc-card">
      <img src={image} alt={title} className="colloc-image" />
      <div className="colloc-overlay">
        <h2 className="colloc-title">{title}</h2>
      </div>
    </div>
  );
};

const OtherServices = () => {
  return (
    <div className="colloc-section">
      <h2 className="colloc-header">Colloc c'est aussi</h2>
      <div className="colloc-container">
        <CollocCard image={image1} title="Conseil immobilier" />
        <CollocCard image={image2} title="Design intérieur" />
        <CollocCard image={image3} title="Mise en relation" />
      </div>
    </div>
  );
};

export default OtherServices;
