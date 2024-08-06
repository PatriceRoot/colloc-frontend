import React from "react";
import Navbar from "../components/Navbar";
import AllHouses from "../components/allHouses";
import Footer from "../components/Footer";
import SearchSection from "../components/SearchSection";

const Buy = () => {
  return (
    <>
      <Navbar />
      <SearchSection />
      <AllHouses statusFilter="Location" />
      <Footer />
    </>
  );
};

export default Buy;
