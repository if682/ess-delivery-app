import { useState } from "react";
import "./index.css";
import { IconUserCircle } from "../../assets/icons";
import SideBar from "../SideBar";

const pages = ["Home", "Cadastro", "Login"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

interface AppBarProps {
  logged: boolean;
  sideBar: boolean;
  userName?: string;
  subtitle?: string;
}

function ResponsiveAppBar({
  logged,
  sideBar,
  userName,
  subtitle,
}: AppBarProps) {
  return (
    <div className="AppBar">
      <div className="header">
        <div className="tittle">CIN VAGO</div>
        {sideBar ? (
          <SideBar />
        ) : (
          <div className="options">
            {logged ? (
              <>
                <button
                  onClick={() => console.log("Reservas")}
                  className="AppBar_Reservas_Button"
                >
                  Reservas
                </button>
                <button
                  onClick={() => console.log("User")}
                  className="AppBar_User_Button"
                >
                  <p>{userName}</p>
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
                  onClick={() => console.log("Cadastro")}
                  className="AppBar_Cadastro_Button"
                >
                  Cadastro
                </button>
                <button
                  onClick={() => console.log("Login")}
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
