import { useEffect } from "react";
import AppContainer from "../../components/Container";
import { Props } from "../../components/ImageCard";
import ImageCardRow from "../../components/ImageCardRow";
import UserCard from "../../components/UserCard";
import GetUsers from "../../hooks/getUsers";
import ReservationForm from "../../components/FormularioReserva";
import SearchBar from "../../components/SearchBar";

export default function HomePage() {

  const { users } = GetUsers()

  useEffect(() => {
    if (users?.length) {
      console.log(users)
    }
  }, [users])

  const cards: Props[] = [
    {
      src: 'https://example.com/image1.jpg',
      alt: 'Image 1',
      width: '200px',
      height: '200px',
      location: 'Paraty, Rio de Janeiro',
      price: 'R$1348',
      description: 'Olhe sempre ao seu redor...',
    },
    {
      src: 'https://example.com/image2.jpg',
      alt: 'Image 2',
      width: '200px',
      height: '200px',
      location: 'Florianópolis, Santa Catarina',
      price: 'R$1890',
      description: 'Descrição da imagem 2',
    },
    {
      src: 'https://example.com/image3.jpg',
      alt: 'Image 3',
      width: '200px',
      height: '200px',
      location: 'Porto Seguro, Bahia',
      price: 'R$990',
      description: 'Descrição da imagem 3',
    },
    {
      src: 'https://example.com/image1.jpg',
      alt: 'Image 1',
      width: '200px',
      height: '200px',
      location: 'Paraty, Rio de Janeiro',
      price: 'R$1348',
      description: 'Olhe sempre ao seu redor...',
    },
    {
      src: 'https://example.com/image1.jpg',
      alt: 'Image 1',
      width: '200px',
      height: '200px',
      location: 'Paraty, Rio de Janeiro',
      price: 'R$1348',
      description: 'Olhe sempre ao seu redor...',
    },
  ];

  return (
    <AppContainer>
      {users?.map(user => <UserCard key={user.id} user={user} />)}
      <ImageCardRow cards={cards} />
    </AppContainer >
  )
}
