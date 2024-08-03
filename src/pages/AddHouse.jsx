import React from "react";
import { HouseProvider } from "../context/house.context";
import HouseForm from "../components/HouseForm";

const AddHouse = () => {
  return (
    <>
      <HouseProvider>
        <HouseForm />
      </HouseProvider>
    </>
  );
};

export default AddHouse;
