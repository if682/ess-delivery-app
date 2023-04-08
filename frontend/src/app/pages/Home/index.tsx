import { useEffect, useState } from "react";
import { Props } from "../../components/ImageCard";
import ImageCardRow from "../../components/ImageCardRow";
import GetUsers from "../../hooks/getUsers";
import GetReservations from "../../hooks/getReservations";

export default function HomePage() {
  const { users } = GetUsers();

  const { reservations } = GetReservations();

  const [reservationsList, setReservationsList] = useState<Props[]>([]);

  useEffect(() => {
    if (users?.length) {
      console.log(users);
    }
  }, [users]);

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
          favoritePage: false,
          descriptionFull: false,
        } as unknown as Props;
        return newObject;
      });

      setReservationsList(reservationsList);
    }
  }, [reservations]);

  return (
    <div>
      <ImageCardRow cards={reservationsList} />
    </div>
  );
}
