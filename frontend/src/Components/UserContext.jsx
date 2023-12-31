import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { gymApi } from "../api/gymApi";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    const usuarioAlmacenado = localStorage.getItem("usuario");
    return usuarioAlmacenado ? JSON.parse(usuarioAlmacenado) : null;
  });

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  const obtenerUsuarioActual = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await gymApi.get("/UsuarioActual", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      if (response.data.Estatus === "CORRECTO") {
        setUsuario(response.data.Resultado);
      }
    } catch (error) {
      console.log("Se produjo un error al obtener la información del usuario actual: ", error);
    }
  };
  

  return (
    <UserContext.Provider value={{ usuario, setUsuario, obtenerUsuarioActual }}>
      {children}
    </UserContext.Provider>
  );
};