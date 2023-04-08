import { IconUserCircle, IconClose } from "../../assets/icons";
import { useSession } from "../../providers/SessionContext";
import "./index.css";

interface SideBarProps {
  closeSideBar: () => void;
}

export default function SideBar({ closeSideBar }: SideBarProps) {
  const { setSession } = useSession();

  const sessionLogout = () => {
    setSession({
      token: "",
      userName: "",
    });
    window.localStorage.removeItem("sessionData");

    closeSideBar();
  };

  const closeSideBarAnimation = () => {
    //@ts-ignore
    document.querySelector(".sideBar").style.animation = "closeSideBar 0.5s";
    setTimeout(closeSideBar, 450);
  };

  return (
    <div className="sideBar">
      <button className="iconClose" onClick={closeSideBarAnimation}>
        {IconClose}
      </button>
      <span className="iconUserCircle">{IconUserCircle}</span>
      {false ? (
        <>
          <button className="sideBar_Option_Button">Gerenciar reservas</button>
          <button className="sideBar_Option_Button">
            Informações pessoais
          </button>
          <button className="sideBar_Option_Button">
            Cadastrar novo usuario administrativo
          </button>
        </>
      ) : (
        <>
          <button className="sideBar_Option_Button">Gerenciar reservas</button>
          <button className="sideBar_Option_Button">Minhas reservas</button>
          <button className="sideBar_Option_Button">Favoritos</button>
          <button className="sideBar_Option_Button">
            Historico de reservas
          </button>
          <button className="sideBar_Option_Button">
            Informações pessoais
          </button>
          <button className="sideBar_Option_Button">Fale conosco</button>
        </>
      )}
      <button className="sideBar_Logout_Button" onClick={() => sessionLogout()}>
        Logout
      </button>
    </div>
  );
}
