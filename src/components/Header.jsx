import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="hero p-1 rounded-3 text-white mb-4">
      <div className="container">
        <h1 className="display-5">Pizzería Mamma Mía</h1>
        <p className="lead">Las mejores pizzas artesanales, preparadas con amor.</p>
      </div>
    </header>
  );
}

export default Header;