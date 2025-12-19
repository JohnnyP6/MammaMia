
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext"; 
const Navbar = () => {
  const { total } = useContext(CartContext);
 
  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">🍕 Mamma Mía</Link>

        <div className="d-flex gap-2">

          <Link className="btn btn-outline-primary" to="/">
            🍕 Home
          </Link>

       
          {token ? (
            <>
        
              <Link className="btn btn-outline-secondary" to="/profile">
                🔓 Profile
              </Link>

              <button 
                className="btn btn-outline-danger"
                onClick={logout} 
              >
                🔒 Logout
              </button>
            </>
          ) : (
            <>
             
              <Link className="btn btn-outline-success" to="/login">
                🔐 Login
              </Link>

              <Link className="btn btn-outline-warning" to="/register">
                🔐 Register
              </Link>
            </>
          )}

          <Link className="btn btn-outline-light" to="/cart">
            🛒 Total: ${total.toLocaleString("es-CL")}
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;