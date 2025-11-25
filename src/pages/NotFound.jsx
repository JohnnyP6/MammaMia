import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; 

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-text">
        <h1>404 - Lo siento, pero esa pizza está en otro castillo! 🍕🏰</h1>
        <Link to="/" className="notfound-link">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;