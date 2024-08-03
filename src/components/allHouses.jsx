import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllHouses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        fetchHouses;
        const response = await axios.get("http://localhost:3000/api/houses");
        setHouses(response.data);
      } catch (error) {
        console.error("Error fetching houses", error);
      }
    };

    fetchHouses();
  }, []);

  return (
    <div className="house-grid">
      {houses.map((house) => (
        <Link
          to={`/houses/${house.id}`}
          key={house.id}
          className="house-card-link"
        >
          <div key={house.id} className="house-card">
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
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllHouses;
