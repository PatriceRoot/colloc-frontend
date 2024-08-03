import React from "react";
import AllHouses from "../components/allHouses";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchSection from "../components/SearchSection";
function Houses() {
  return (
    <>
      <Navbar />
      <SearchSection />
      <AllHouses />
      <Footer />
    </>
  );
}

export default Houses;
