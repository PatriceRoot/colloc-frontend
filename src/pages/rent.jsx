import React from "react";
import DotsLoader from "../components/DotsLoader";
import Navbar from "../components/Navbar";

const Rent = () => {
  return (
    <>
      <Navbar />
      <div className="load">
        <DotsLoader />
      </div>
    </>
  );
};

export default Rent;
