import React from "react";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <div
      className={`footer ${
        location.pathname === "/thinking" ? "footer-dark" : ""
      }`}
    >
      <div className="container">
        <div className="footer-item">
          <p>
            <Link to="/">Beilei Zhu</Link>
          </p>
        </div>
        <div className="footer-item" id="footer-contact">
          <p>
            Contact — <a href="#">beileibud@gmail.com</a>
          </p>
        </div>
        <div className="footer-item">
          <p>&copy; 2018-2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
