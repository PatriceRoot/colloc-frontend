import React from "react";

const SearchSection = () => {
  return (
    <div className="search-section">
      <input
        type="text"
        placeholder="Recherche par province, ville, quartier, avenue, ..."
      />
      <button className="search-btn">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.242 1.41a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
        </svg>
      </button>
      <select>
        <option>Acheter</option>
        <option>Louer</option>
        <option>Investir</option>
      </select>
      <select>
        <option>Gamme de prix</option>
        <option>$100k - $200k</option>
        <option>$200k - $300k</option>
      </select>
      <select>
        <option>Chambres</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4+</option>
      </select>
      <select>
        <option>Salles de bain</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4+</option>
      </select>
      <select>
        <option>Type de maison</option>
        <option>Appartement</option>
        <option>Maison</option>
        <option>Villa</option>
      </select>
    </div>
  );
};

export default SearchSection;
