/* import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();
  const hideLayout = location.pathname === "/404";

  const isHome = location.pathname === "/";

  return (
    <>
      {!hideLayout && <Navbar />}


      {isHome ? (
        <Outlet />
      ) : (
        <main className="main-layout">
          <Outlet />
        </main>
      )}

      {!hideLayout && <Footer />}
    </>
  );
};

export default Layout;


 */

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
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
