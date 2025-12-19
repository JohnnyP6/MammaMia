import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // Estado del token, por defecto true según el hito [cite: 23]
  const [token, setToken] = useState(true);

  // Método logout [cite: 26]
  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;