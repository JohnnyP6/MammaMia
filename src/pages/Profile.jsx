

import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { email, logout, getProfile } = useContext(UserContext);

  useEffect(() => {

    getProfile();
  }, [getProfile]);

  return (
    <div className="container mt-5 text-center">
      <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h1 className="mb-3">Perfil de Usuario</h1>
        <p className="lead">
          Email: <strong>{email}</strong>
        </p>
        <button className="btn btn-danger" onClick={logout}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;