import { useContext, useMemo } from 'react';
import { createContext, useState } from 'react';
import { api } from '../services/api';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [userData, setUserData] = useState({});


  const handleLogin = async (email, password) => {
    try {
      const body = { email, password };
      const response = await api.post('/login', body);
      const { artist, token } = response.data;
      setUserData(artist);
      localStorage.setItem('token', token);
      alert("Login bem sucedido")
    } catch (error) {
      alert("Erro ao fazer login!");
    }
  };

  const value = useMemo(() => ({
    userData,
    setUserData,
    handleLogin
  }), [userData]);

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