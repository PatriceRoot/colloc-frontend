import React, {useContext} from "react";
import DotsLoader from "../components/DotsLoader";
import Navbar from "../components/Navbar";

const Buy = () => {
  return (
    <>
      <Navbar />
      <div className="load">
        <DotsLoader />
      </div>
    </>
  );
};

export default Buy;
