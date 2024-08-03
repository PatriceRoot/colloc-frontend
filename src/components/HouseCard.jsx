import React from "react";

const HouseCard = ({ state, bedrooms, bathrooms, address, price, image }) => {
  return (
    <div className="house-card">
      <img src={image} alt="House" className="house-image" />
      <div className="house-details">
        <p>
          <strong>Etat :</strong> {state}
        </p>
        <p>
          <strong>Nombre de chambres :</strong> {bedrooms}
        </p>
        <p>
          <strong>Nombre de toilettes :</strong> {bathrooms}
        </p>
        <p>
          <strong>Adresse :</strong> {address}
        </p>
        <p>
          <strong>PRIX :</strong> {price}
        </p>
      </div>
    </div>
  );
};

export default HouseCard;
