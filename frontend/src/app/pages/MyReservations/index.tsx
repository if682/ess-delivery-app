import { Link } from "react-router-dom";
import "./index.css";

export default function MyReservationsPage() {
  return (
    <>
      <h1>MINHAS RESERVAS</h1>
      <h2>RESERVAS</h2>
      <Link to={"/reservation"} className="createNewReservation">
        Cadastrar nova reserva
      </Link>
    </>
  );
}
