import React from "react";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MaisonEnVedette from "./components/MaisonEnVedette";
import OtherServices from "./components/OtherServices";
import Footer from "./components/Footer";
import SearchSection from "./components/SearchSection";
function App() {
  return (
    <>
      <Navbar />
      <SearchSection />
      <SearchBar />
      <MaisonEnVedette />
      <OtherServices />
      <Footer />
    </>
  );
}

export default App;
