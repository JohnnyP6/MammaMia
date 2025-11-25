import { Outlet, useLocation } from "react-router-dom";
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

      {/* Si es Home → NO usar main-layout */}
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
