import "./App.css";
import Router from "./routes";
import AppBar from "./components/AppBar";
import { SessionProvider } from "./providers/SessionContext";
import QueryProvider from "./providers/useQuery";
import SearchBar from "./components/SearchBar";
import LoginRegisterModal from "./components/LoginRegisterModal";
import { useState } from "react";

function App() {
  const [showLoginRegisterModal, setShowLoginRegisterModal] = useState(false);
  const [newUser, setNewUser] = useState(false);

  const showLoginRegister = (newUser: boolean) => {
    setShowLoginRegisterModal(true);
    setNewUser(newUser);
  };

  return (
    <div className="App">
      <QueryProvider>
        <SessionProvider>
          <AppBar showLoginRegisterModal={showLoginRegister} />
          <LoginRegisterModal
            isOpen={showLoginRegisterModal}
            newUser={newUser}
            onRequestClose={() => setShowLoginRegisterModal(false)}
          />
          <Router />
        </SessionProvider>
      </QueryProvider>
    </div>
  );
}

export default App;
