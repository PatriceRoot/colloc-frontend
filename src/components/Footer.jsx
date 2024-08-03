import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>COLLOC, copyright, 2024</p>
      </div>
      <div className="footer-right">
        <ul className="social-icons">
          <li>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-pinterest"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
