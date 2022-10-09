import { useEffect, useState } from 'react';
import { useLogin } from '../../contexts/Login';
import { api } from '../../services/api';

import Icon from '../../components/Icon'
import AddAlbum from '../../components/AddAlbum'

import "./styles.css"
import { useNavigate } from 'react-router';

const Artist = () => {
  const { loggedUserId, handleLogout } = useLogin();
  const [userData, setUserData] = useState();
  const navigate = useNavigate()

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
      <p className='Nome'>{userData.name}</p>
      <button className='IconButton' onClick={() => navigate('/editArtist')}><Icon iconType="Edit"/></button>
      <button className='IconButton' onClick={() => handleLogout()}><Icon iconType="SignOut"/></button>
      <AddAlbum onClick={() => navigate("/createAlbum")}/>
    </div>
  );
};

export default Artist;