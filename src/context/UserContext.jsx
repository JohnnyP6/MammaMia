

import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        alert("Autenticación exitosa");
      } else {
        alert(data.error || "Error en autenticación");
      }
    } catch (error) {
      console.error("Error en login:", error);
    }
  };


  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        alert("Registro exitoso");
      } else {
        alert(data.error || "Error en registro");
      }
    } catch (error) {
      console.error("Error en registro:", error);
    }
  };


  const logout = () => {
    setToken(null);
    setEmail(null);
  };


  const getProfile = async () => {
    if (!token) return;
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log("User Profile:", data);
    } catch (error) {
      console.error("Error obteniendo perfil:", error);
    }
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;