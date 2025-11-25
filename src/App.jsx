import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import AuthLayout from "./components/AuthLayout";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import "./App.css";

const App = () => {
  return (
    <Routes>

      {/* Layout general (Home, Pizza, Cart, Profile, etc.) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Layout especial para login/register */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

    </Routes>
  );
};

export default App;
