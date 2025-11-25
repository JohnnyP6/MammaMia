import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./AuthLayout.css";



const AuthLayout = () => {
  return (
 
    <div className="auth-layout"> 
      
      <Navbar /> 
      
    
      <main className="auth-content"> 
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
};

export default AuthLayout;