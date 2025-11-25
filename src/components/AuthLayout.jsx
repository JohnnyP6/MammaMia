import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./AuthLayout.css";

/* const AuthLayout = () => {
  return (
    <>
      <Navbar />

      <div className="auth-main">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default AuthLayout;
 */

const AuthLayout = () => {
  return (
    // Agregamos una clase, por ejemplo, 'auth-layout'
    <div className="auth-layout"> 
      {/* Si estas páginas tienen un Navbar, inclúyelo */}
      <Navbar /> 
      
      {/* El contenido de Login/Register */}
      <main className="auth-content"> 
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
};

export default AuthLayout;