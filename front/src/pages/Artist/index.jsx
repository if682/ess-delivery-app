import { useEffect, useState } from 'react';
import { useLogin } from '../../contexts/Login';
import { api } from '../../services/api';

const Artist = () => {
  const { loggedUserId } = useLogin();
  const [userData, setUserData] = useState();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await api.get(`artists/${loggedUserId}`);
        setUserData(response.data);
      } catch (error) {
        alert("Erro ao pegar informações do artista");
      }
    };
    if (loggedUserId) getUserData();
  }, [loggedUserId]);

  if (!userData) return "Carregando!";
  return (
    <div>
      {userData.name}
    </div>
  );
};

export default Artist;