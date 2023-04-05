import { useState } from "react";
import "./index.css";
import { IconUserCircle } from "../../assets/icons";
import SideBar from "../SideBar";
import { useSession } from "../../providers/SessionContext";

const pages = ["Home", "Cadastro", "Login"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

interface AppBarProps {
  subtitle?: string;
  showLoginRegisterModal: (e: boolean) => void;
}

function ResponsiveAppBar({ subtitle, showLoginRegisterModal }: AppBarProps) {
  const [showSideBar, setShowSideBar] = useState(false);

  const { session, setSession } = useSession();

  const isLogged = () => {
    return session.token ? true : false;
  };

  return (
    <div className="AppBar">
      <div className="header">
        <div className="tittle">CIN VAGO</div>
        {showSideBar ? (
          <SideBar closeSideBar={() => setShowSideBar(false)} />
        ) : (
          <div className="options">
            {isLogged() ? (
              <>
                <button
                  onClick={() => console.log("Reservas")}
                  className="AppBar_Reservas_Button"
                >
                  Reservas
                </button>
                <button
                  onClick={() => setShowSideBar(true)}
                  className="AppBar_User_Button"
                >
                  <p>{session.userName}</p>
                  {IconUserCircle}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => console.log("Reservas")}
                  className="AppBar_Reservas_Button"
                >
                  Reservas
                </button>
                <button
                  onClick={() => showLoginRegisterModal(true)}
                  className="AppBar_Cadastro_Button"
                >
                  Cadastro
                </button>
                <button
                  onClick={() => showLoginRegisterModal(false)}
                  className="AppBar_Login_Button"
                >
                  Login
                </button>
              </>
            )}
          </div>
        )}
      </div>
      {subtitle ? <div className="subtitle">{subtitle}</div> : <></>}
    </div>
  );
}
export default ResponsiveAppBar;
