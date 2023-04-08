import { useEffect, useState } from "react";
import AppContainer from "../../components/Container";
import { Props } from "../../components/ImageCard";
import ImageCardRow from "../../components/ImageCardRow";
import UserCard from "../../components/UserCard";
import GetUsers from "../../hooks/getUsers";
import ReservationForm from "../../components/FormularioReserva";
import SearchBar from "../../components/SearchBar";
import GetReservations from "../../hooks/getReservations";

export default function HomePage() {

  const { users } = GetUsers()

  const { reservations } = GetReservations()

  const [reservationsList, setReservationsList] = useState<Props[]>([])

  useEffect(() => {
    if (users?.length) {
      console.log(users)
    }
  }, [users])

  useEffect(() => {

    if (reservations?.length) {
      console.log('Bolo');
      const reservationsList = reservations.map((e) => {
        const newObject = {
          src: '',
          id: e.id,
          alt: 'Image 1',
          width: '200px',
          height: '200px',
          name: e.name,
          location: e.city,
          price: e.budget,
          description: e.additionalInfo,
        } as unknown as Props
        return newObject;
      });

      setReservationsList(reservationsList)
    }
  }, [reservations])

  const cards: Props[] = [

  ];

  return (
    <AppContainer>
      {users?.map(user => <UserCard key={user.id} user={user} />)}
      <ImageCardRow cards={reservationsList} />
    </AppContainer >
  )
}


