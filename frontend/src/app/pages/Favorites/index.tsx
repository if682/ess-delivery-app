import { useCallback, useEffect, useState } from "react";
import ImageCardRow from "../../components/ImageCardRow";
import "./index.css";
import { Props } from "../../components/ImageCard";
import { useSession } from "../../providers/SessionContext";
import { APIClient } from "../../../services/api/client";

export default function FavoritesPage() {
  const { session } = useSession();
  console.log("FavoritesPage");
  const getFavoritesReservations = useCallback(async () => {
    const apiClient = new APIClient();

    try {
      const id = await apiClient.getIdByToken(session.token);
      const reservations = await apiClient.GetFavoritesReservations(id);
      return reservations;
    } catch (err) {
      throw new Error("Error while getting users");
    }
  }, [session]);

  const saveFavorites = useCallback(async () => {
    const favorites = await getFavoritesReservations();
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
          favoritePage: true,
          descriptionFull: true,
        } as unknown as Props;
        return newObject;
      });

      setFavoriteReservations(reservationsList);
    }
  }, [getFavoritesReservations]);

  useEffect(() => {
    console.log("session");
    if (session) {
      console.log("useEffect");
      saveFavorites();
    }
  }, [session]);

  const [favoriteReservations, setFavoriteReservations] = useState<Props[]>([]);

  return (
    <>
      {favoriteReservations.length ? (
        <div>
          <h1>FAVORITOS!</h1>
          <ImageCardRow evaluate={false} cards={favoriteReservations} />
        </div>
      ) : (
        <h1 id="isEmpty">Esta lista está vazia!!</h1>
      )}
    </>
  );
}
