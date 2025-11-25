import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import AuthLayout from "./components/AuthLayout";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./components/Cart";
import Pizza from "./components/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import "./App.css";

/* const App = () => {
  return (
    <Routes>


      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

    </Routes>
  );
};

export default App; */

const App = () => {
  return (
    <Routes>
      {/* 1. Rutas que SÍ usan el Layout (con Navbar y Footer) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* 2. Rutas de Autenticación (con AuthLayout) */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* 3. ¡NUEVO! Ruta de 404 (Not Found) */}
      {/* Esta ruta es independiente y solo carga el componente NotFound. */}
      {/* Así no se renderiza NADA más. */}
      <Route path="*" element={<NotFound />} /> 
      
    </Routes>
  );
};

export default App;