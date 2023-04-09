import { Link } from "react-router-dom";
import "./index.css";
import { APIClient } from "../../../services/api/client";
import { useCallback, useEffect, useState } from "react";
import { useSession } from "../../providers/SessionContext";
import { Props } from "../../components/ImageCard";
import ImageCardRow from "../../components/ImageCardRow";

export default function MyReservationsPage() {
  const { session } = useSession();
  const [myReservations, setMyReservations] = useState<Props[]>([]);

  const getCreatedReservation = useCallback(async () => {
    const apiClient = new APIClient();

    try {
      const id = await apiClient.getIdByToken(session.token);
      const reservations = await apiClient.getCreatedReservation(id);
      return reservations;
    } catch (err) {
      throw new Error("Error while getting users");
    }
  }, [session]);

  const saveFavorites = useCallback(async () => {
    const favorites = await getCreatedReservation();
    console.log(favorites);
    if (favorites?.length) {
      console.log("Bolo");
      const reservationsList = favorites.map((e: any) => {
        const newObject = {
          src: "",
          id: e.id,
          alt: "Image 1",
          width: "200px",
          height: "200px",
          name: e.name,
          location: e.city,
          price: e.budget,
          description: e.additionalInfo,
          favoritePage: false,
          descriptionFull: true,
        } as unknown as Props;
        return newObject;
      });

      setMyReservations(reservationsList);
    }
  }, [getCreatedReservation]);

  useEffect(() => {
    console.log("session");
    if (session) {
      console.log("useEffect");
      saveFavorites();
    }
  }, [session]);

  return (
    <>
      <h1>MINHAS RESERVAS</h1>
      {myReservations.length ? (
        <ImageCardRow evaluate={false} cards={myReservations} />
      ) : (
        <h2>Você não possui propriedades cadastradas</h2>
      )}
      <Link to={"/reservation"} className="createNewReservation">
        Cadastrar nova reserva
      </Link>
    </>
  );
}
