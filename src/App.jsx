/* import { Routes, Route } from "react-router-dom";

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
  return (
    <Routes>


      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} /> 
        <Route path="/profile" element={<Profile />} />
      </Route>


      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

 
      <Route path="*" element={<NotFound />} /> 

    </Routes>
  );
};

export default App;
 */

import { Routes, Route, Navigate } from "react-router-dom"; // 1. Agregamos Navigate
import { useContext } from "react"; // 2. Agregamos useContext
import { UserContext } from "./context/UserContext"; // 3. Importamos el Contexto

import Layout from "./components/Layout";
import AuthLayout from "./components/AuthLayout";

import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import Pizza from "./components/Pizza"; // Asegúrate que esta ruta sea correcta
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import "./App.css";

const App = () => {
  // 4. Obtenemos el token para validar permisos
  const { token } = useContext(UserContext);

  return (
    <Routes>

      {/* Rutas principales con Navbar (Layout) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        
        {/* RUTA PROTEGIDA: Profile */}
        {/* Si token es true -> Profile, si no -> redirigir a Login */}
        <Route 
          path="/profile" 
          element={token ? <Profile /> : <Navigate to="/login" />} 
        />
      </Route>

      {/* Rutas de Autenticación (AuthLayout) */}
      <Route element={<AuthLayout />}>
        {/* RUTA PROTEGIDA: Login y Register */}
        {/* Si ya tiene token -> redirigir a Home, si no -> mostrar formulario */}
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