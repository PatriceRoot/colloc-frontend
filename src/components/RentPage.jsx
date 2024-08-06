import React from "react";
import Navbar from "./Navbar";
import AllHouses from "../components/allHouses";
import Footer from "../components/Footer";
import SearchSection from "../components/SearchSection";

const Rent = () => {
  return (
    <>
      <Navbar />
      <SearchSection />
      <AllHouses statusFilter="Location" />
      <Footer />
    </>
  );
};

export default Rent;
