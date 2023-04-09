import "./index.css";

import { IconUserCircle } from "../../assets/icons";

const objTest: { [key: string]: string | number } = {
  id: "f80dde00-f9b5-4b92-96e3-3f722be307e4",
  email: "joca_caralegal2@gmail.com",
  cpf: "123.123.123-14",
  name: "João Marcondes",
  password: 123456,
  role: "USER",
};

export default function UserData() {
  return (
    <>
      <h1>Dados do Usuario</h1>
      <div className="containerPageUserData">
        <span className="userIcon">{IconUserCircle}</span>
        <div className="userDataContainer">
          {objTest.role === "USER" ? (
            <>
              <p>
                <span className="objKey">Nome:</span> {objTest.name}
              </p>
              <p>
                <span className="objKey">Email:</span> {objTest.email}
              </p>
              <p>
                <span className="objKey">CPF:</span> {objTest.cpf}
              </p>
              <p>
                <span className="objKey">Tipo de usuario:</span> Usuario comum
              </p>
            </>
          ) : (
            <>
              <p>
                <span className="objKey">Nome:</span> {objTest.name}
              </p>
              <p>
                <span className="objKey">Email:</span> {objTest.email}
              </p>
              <p>
                <span className="objKey">CPF:</span> {objTest.cpf}
              </p>
              <p>
                <span className="objKey">Tipo de usuario:</span> Usuario
                administrativo
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
