

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

/* const Layout = () => {
  const location = useLocation();
  const hideLayout = location.pathname === "/404";

  return (
    <>
      {!hideLayout && <Navbar />}

      <main>
        <Outlet />
      </main>

      {!hideLayout && <Footer />}
    </>
  );
};

export default Layout;
 */

const Layout = () => {
  return (
    // Agregamos una clase, por ejemplo, 'main-layout'
    <div className="main-layout"> 
      <Navbar />
      
      {/* Aquí es donde se inyecta el contenido de las rutas hijas (Home, Cart, etc.) */}
      {/* Usaremos la clase 'main-content' para empujar el footer */}
      <main className="main-content">
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
};

export default Layout;