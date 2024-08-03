import React from "react";
import HouseCard from "./HouseCard";
import { useState } from "react";
import image1 from "../assets/images/house1.jpg";
import image2 from "../assets/images/house2.jpg";
import image3 from "../assets/images/house3.jpg";
import right from "../assets/icons/right.svg";
import left from "../assets/icons/left.svg";
const MaisonEnVedette = () => {
  const houses = [
    {
      state: "En vente",
      bedrooms: 4,
      bathrooms: 2,
      address: "Goma, Comm. Goma, Q. Kyeshero, Av. Des Enseignants N°031",
      price: "60.000$",
      image: image1,
    },
    {
      state: "En vente",
      bedrooms: 5,
      bathrooms: 4,
      address: "Goma, Comm. Goma, Q. Kyeshero, Av. Des Enseignants N°031",
      price: "80.000$",
      image: image2,
    },
    {
      state: "En location",
      bedrooms: 2,
      bathrooms: 2,
      address: "Goma, Comm. Goma, Q. Kyeshero, Av. Des Enseignants N°031",
      price: "200$",
      image: image3,
    },
    {
      state: "En vente",
      bedrooms: 4,
      bathrooms: 2,
      address: "Goma, Comm. Goma, Q. Kyeshero, Av. Des Enseignants N°031",
      price: "60.000$",
      image: image1,
    },
    {
      state: "En vente",
      bedrooms: 5,
      bathrooms: 4,
      address: "Goma, Comm. Goma, Q. Kyeshero, Av. Des Enseignants N°031",
      price: "80.000$",
      image: image2,
    },
    {
      state: "En location",
      bedrooms: 2,
      bathrooms: 2,
      address: "Goma, Comm. Goma, Q. Kyeshero, Av. Des Enseignants N°031",
      price: "200$",
      image: image3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < houses.length - 1 ? prevIndex + 1 : houses.length - 1
    );
  };

  return (
    <div className="maisons-container">
      <h2 className="maisons-title">Maisons en premier plan</h2>
      <div className="maisons-slider">
        {currentIndex > 0 && (
          <img
            src={left}
            alt="Previous"
            className="arrow left-arrow"
            onClick={handlePrevClick}
          />
        )}
        {houses.slice(currentIndex, currentIndex + 4).map((house, index) => (
          <HouseCard key={index} {...house} />
        ))}
        {currentIndex < houses.length - 4 && (
          <img
            src={right}
            alt="Next"
            className="arrow right-arrow"
            onClick={handleNextClick}
          />
        )}
      </div>
    </div>
  );
};

export default MaisonEnVedette;
