import { useCallback, useEffect, useState } from "react";
import ImageCardRow from "../../components/ImageCardRow";
import "./index.css";
import { APIClient } from "../../../services/api/client";
import { useSession } from "../../providers/SessionContext";
import { Props } from "../../components/ImageCard";

export default function Favorites() {
  const { session } = useSession();
  const [completedReservations, setCompletedReservations] = useState<Props[]>(
    []
  );

  const getCreatedReservation = useCallback(async () => {
    const apiClient = new APIClient();

    try {
      const id = await apiClient.getIdByToken(session.token);
      const reservations = await apiClient.getCompletedReservations(id);
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
          evaluations: e.evaluations,
        } as unknown as Props;
        return newObject;
      });

      setCompletedReservations(reservationsList);
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
    <div>
      <h1>HISTORICO DE RESERVAS</h1>
      {completedReservations.length ? (
        <h2>Você não possui nenhuma reserva em seu historico</h2>
      ) : (
        <ImageCardRow evaluate={true} cards={completedReservations} />
      )}
    </div>
  );
}
