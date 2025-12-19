

import { Routes, Route, Navigate } from "react-router-dom"; 
import { useContext } from "react"; 
import { UserContext } from "./context/UserContext"; 

import Layout from "./components/Layout";
import AuthLayout from "./components/AuthLayout";

import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import Pizza from "./components/Pizza"; 
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import "./App.css";

const App = () => {

  const { token } = useContext(UserContext);

  return (
    <Routes>

  
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        

        <Route 
          path="/profile" 
          element={token ? <Profile /> : <Navigate to="/login" />} 
        />
      </Route>


      <Route element={<AuthLayout />}>

        <Route 
          path="/login" 
          element={token ? <Navigate to="/" /> : <LoginPage />} 
        />
        <Route 
          path="/register" 
          element={token ? <Navigate to="/" /> : <RegisterPage />} 
        />
      </Route>
 
      <Route path="*" element={<NotFound />} /> 

    </Routes>
  );
};

export default App;