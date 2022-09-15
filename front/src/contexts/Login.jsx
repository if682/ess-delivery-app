import { useContext, useMemo } from 'react';
import { createContext, useState } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const handleLogin = async (email, password) => {

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