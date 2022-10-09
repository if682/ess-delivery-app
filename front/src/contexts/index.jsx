import { LoginProvider } from './Login';
import { AlbumProvider } from './Album'
const AppProvider = ({ children }) => {
  return (
    <LoginProvider>

      <AlbumProvider>
      {children}
      </AlbumProvider>
    </LoginProvider>
  );
};

export default AppProvider;