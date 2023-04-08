import { useEffect, useState } from "react";
import ImageCardRow from "../../components/ImageCardRow";
import "./index.css";
import { Props } from "../../components/ImageCard";
import GetReservations from "../../hooks/getReservations";

export default function FavoritesPage() {
  const { reservations } = GetReservations();

  const [favoriteReservations, setFavoriteReservations] = useState<Props[]>([]);

  useEffect(() => {
    if (reservations?.length) {
      console.log("Bolo");
      const reservationsList = reservations.map((e) => {
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
  }, [reservations]);

  return (
    <>
      {favoriteReservations.length ? (
        <div>
          <h1>FAVORITOS</h1>
          <ImageCardRow cards={favoriteReservations} />
        </div>
      ) : (
        <h1 id="isEmpty">Esta lista está vazia</h1>
      )}
    </>
  );
}
