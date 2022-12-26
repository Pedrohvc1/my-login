import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../services/api";

export const AuthContext = createContext();

//AuthProvider - responsavel por prover o context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  
  //executa todas as vezes que a aplicação inicializa
  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    //const token = localStorage.getItem("token");

    if (recoveredUser /*&& token*/) {
      setUser(JSON.parse(recoveredUser));
      //api.defaults.headers.Authorization = `Bearer ${token}`
    }
    setLoading(false);
  }, []);


    // const login = async (credential, password) => {
  const login = (credential, password) => {
    /*const response = createSession(credential, password);
    console.log("login auth", response.data);*/

    //create session
//remove
    const loggedUser = {
      id: "123",
      credential,
    };
    // const loggedUser = response.data.user;
    //const token = response.data.token;

    //loggedUser converter para objeto
    localStorage.setItem("user", JSON.stringify(loggedUser));
    //localStorage.setItem("token", token);
    //api.defaults.headers.Authorization = `Bearer ${token}`;

//remove
    if (password === "123") {
      setUser(loggedUser);
      navigate("/");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    // localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
