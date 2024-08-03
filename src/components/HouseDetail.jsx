import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "./Bouton";

const HouseDetail = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);

  useEffect(() => {
    const fetchHouse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/houses/${id}`
        );
        setHouse(response.data);
      } catch (error) {
        console.error("Failed to fetch house", error);
      }
    };

    fetchHouse();
  }, [id]);

  const handleReserve = () => {
    console.log("Reservation clicked for house:", house.id);
  };

  if (!house) {
    return <div>Loading...</div>;
  }

  return (
    <div className="house-detail">
      {/* <img src={house.imageUrl} alt={house.title} className="house-image" /> */}
      <div className="house-info">
        <h2>{house.title}</h2>
        <p>Etat : {house.status}</p>
        <p>Chambres : {house.bedroom}</p>
        <p>Salles de bain : {house.bathroom}</p>
        <p>Adresse : {house.location}</p>
        <p>PRIX : {house.price}$</p>
        <p>Posté le : {house.createdAt}</p>
        <p>Mis à jour le : {house.updatedAt}</p>
        <Button onClick={handleReserve}>Réserver</Button>
      </div>
    </div>
  );
};

export default HouseDetail;
