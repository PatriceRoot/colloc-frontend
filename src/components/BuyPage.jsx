import React, { useContext } from "react";
import { HouseContext } from "../context/house.context";

const BuyPage = () => {
  const { houses } = useContext(HouseContext);

  return (
    <div>
      {houses.map((house) => (
        <div key={house.id}>
          <h2>{house.title}</h2>
          <p>{house.description}</p>
          <p>{house.price}</p>
        </div>
      ))}
    </div>
  );
};

export default BuyPage;
