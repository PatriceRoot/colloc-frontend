import React from "react";
import Button from "./Bouton";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate(location.pathname);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Accueil</Link>
          </li>
          <li className="navbar-item">
            <Link to="/houses">Maisons</Link>
          </li>
          <li className="navbar-item">
            <Link to="/buy">Acheter</Link>
          </li>
          <li className="navbar-item">
            <Link to="/rent">Louer</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {token ? (
          <Button className="navbar-button" onClick={handleLogout}>
            Se déconnecter
          </Button>
        ) : (
          <Button className="navbar-button">
            <Link to="/login">Se connecter</Link>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
