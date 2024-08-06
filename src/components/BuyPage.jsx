import React from "react";
import Navbar from "./Navbar";
import AllHouses from "../components/allHouses";
import Footer from "../components/Footer";
import SearchSection from "../components/SearchSection";

const Buy = () => {
  return (
    <>
      <SearchSection />
      <AllHouses statusFilter="Location" />
      <Footer />
    </>
  );
};

export default Buy;
