import { LoginProvider } from './Login';

const AppProvider = ({ children }) => {
  return (
    <LoginProvider>
      {children}
    </LoginProvider>
  );
};

export default AppProvider;