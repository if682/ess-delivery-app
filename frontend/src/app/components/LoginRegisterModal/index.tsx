import ReactModal from "react-modal";
import "./index.css";
import { IconClose } from "../../assets/icons";
import { ChangeEvent, useState } from "react";
import { APIClient } from "../../../services/api/client";
import { useSession } from "../../providers/SessionContext";

interface LoginRegisterModalProps {
  isOpen: boolean;
  newUser: boolean;
  onRequestClose: () => void;
}

const API = new APIClient();

export default function LoginRegisterModal({
  isOpen,
  newUser,
  onRequestClose,
}: LoginRegisterModalProps) {
  const { setSession } = useSession();

  const [data, setData] = useState({
    name: "",
    email: "",
    cpf: "",
    password: "",
    repeatPassword: "",
    keepConnected: false,
    termsAndConditions: false,
    promotions: false,
  });

  const resetData = () => {
    setData({
      name: "",
      email: "",
      cpf: "",
      password: "",
      repeatPassword: "",
      keepConnected: false,
      termsAndConditions: false,
      promotions: false,
    });
    onRequestClose();
  };

  const onChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onChangeInputsCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setData(() => {
      const retorno = {
        ...data,
        [e.target.name]: !data[e.target.name as keyof typeof data],
      };
      console.log(retorno);
      return retorno;
    });
  };

  const modalLogin = async (data: any) => {
    const response = await API.sendFormLogin(data);
    if (data.keepConnected) {
      window.localStorage.setItem("sessionData", JSON.stringify(response));
    }
    setSession(() => response);
    if (response.token) {
      resetData();
    }
  };

  const modalRegister = async (data: any) => {
    await API.sendFormRegister(data);
    resetData();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={resetData}
      parentSelector={() => document.querySelector("#root") as HTMLElement}
      className="modalLoginRegister"
      overlayClassName="overlayModalLoginRegister"
    >
      <div className="title">
        <p>{newUser ? "Cadastre-se no Cinvago!" : "Faça Login no Cinvago!"} </p>
        <button onClick={resetData}>{IconClose}</button>
      </div>
      <div className="formModalLoginRegister">
        {newUser ? (
          <input
            type="text"
            placeholder="Nome"
            value={data.name}
            name="name"
            onChange={onChangeInputs}
          />
        ) : (
          <></>
        )}
        <input
          type="text"
          placeholder="Email"
          value={data.email}
          name="email"
          onChange={onChangeInputs}
        />
        {newUser ? (
          <input
            type="text"
            placeholder="CPF"
            value={data.cpf}
            name="cpf"
            onChange={onChangeInputs}
          />
        ) : (
          <></>
        )}
        <input
          type="password"
          placeholder="Senha"
          value={data.password}
          name="password"
          onChange={onChangeInputs}
        />
        {newUser ? (
          <input
            type="password"
            placeholder="Repetir senha"
            value={data.repeatPassword}
            name="repeatPassword"
            onChange={onChangeInputs}
          />
        ) : (
          <></>
        )}
        <div className="checkboxFormModalLoginRegister">
          {!newUser ? (
            <span>
              <input
                type="checkbox"
                name="keepConnected"
                checked={data.keepConnected}
                onChange={onChangeInputsCheckbox}
              />
              <label htmlFor="keepConnected">Manter-se conectado</label>
            </span>
          ) : (
            <></>
          )}
          {newUser ? (
            <>
              <span>
                <input
                  type="checkbox"
                  name="termsAndConditions"
                  checked={data.termsAndConditions}
                  onChange={onChangeInputsCheckbox}
                />
                <label htmlFor="termsAndConditions">
                  Eu aceito os termos e condições
                </label>
              </span>
              <span>
                <input
                  type="checkbox"
                  name="promotions"
                  checked={data.promotions}
                  onChange={onChangeInputsCheckbox}
                />
                <label htmlFor="promotions">
                  Aceito receber alertas promocionais por email
                </label>
              </span>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <button
        className="buttonModalLoginRegister"
        onClick={() => {
          console.log("testenado 1 2 3...  ", newUser);
          newUser ? modalRegister(data) : modalLogin(data);
        }}
      >
        {newUser ? "Criar conta" : "Login"}
      </button>
    </ReactModal>
  );
}
