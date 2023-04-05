import { useEffect } from "react";
import AppContainer from "../../components/Container";
import UserCard from "../../components/UserCard";
import GetUsers from "../../hooks/getUsers";
import ReservationForm from "../../components/FormularioReserva";
import SearchBar from "../../components/SearchBar";

export default function HomePage() {

  const { users } = GetUsers()

  useEffect(() => {
    if(users?.length) {
      console.log(users)
    }
  }, [users])

  return (
    <AppContainer>
      {users?.map(user => <UserCard key={user.id} user={user} />)}
    </AppContainer>
  )
}
