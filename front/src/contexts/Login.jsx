import { useContext, useEffect, useMemo } from 'react';
import { useCallback } from 'react';
import { createContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { api, setAuthToken } from '../services/api';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loggedUserId, setLoggedUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const validateLogin = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await api.post('/auth/validate-token', undefined, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const { userId } = response.data;
          setLoggedUserId(userId);
        }
      } catch (error) {
        localStorage.clear();
        navigate("/login");
      }
    };
    validateLogin();
  }, [navigate]);

  const handleLogin = useCallback(async (email, password) => {
    try {
      const body = { email, password };
      const response = await api.post('/auth/login', body);
      const { artist, token } = response.data;
      localStorage.setItem('token', token);
      setLoggedUserId(artist._id);
      setAuthToken(token);
      alert("Login bem sucedido");
      navigate("/artist");
    } catch (error) {
      alert("Erro ao fazer login!");
    }
  }, [navigate]);

  const value = useMemo(() => ({
    loggedUserId,
    setLoggedUserId,
    handleLogin
  }), [handleLogin, loggedUserId]);

  return (
    <LoginContext.Provider value={value}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) throw new Error("useLogin must be used within a LoginProvider");
  return context;
};