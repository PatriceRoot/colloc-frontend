import React, { useState } from "react";
import axios from "axios";
import Button from "./Bouton";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/houses/search",
        {
          params: { query },
        }
      );
      setSearchResults(response.data);
      console.log("Search results:", response.data);
    } catch (error) {
      console.error("Search failed:", error.message);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Recherche par province, ville, quartier, avenue, ..."
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button className="search-button" onClick={handleSearch}>
        Recherche
      </Button>
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((house) => (
            <div key={house.id} className="search-result-item">
              <h3>{house.title}</h3>
              <p>{house.location}</p>
              <p>{house.description}</p>
              <p>Price: {house.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
