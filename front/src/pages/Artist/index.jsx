import { useEffect, useState } from 'react';
import { useLogin } from '../../contexts/Login';
import { api } from '../../services/api';

import Icon from '../../components/Icon';
import AddAlbum from '../../components/AddAlbum';
import Album from '../../components/Album';

import "./styles.css";
import { useNavigate } from 'react-router';
import { useAlbum } from '../../contexts/Album';

const Artist = () => {
  const { loggedUserId, handleLogout } = useLogin();
  const [userData, setUserData] = useState();
  const [albums, setAlbums] = useState();
  const {resetAlbumContext} = useAlbum();
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await api.get(`artists/${loggedUserId}`);
        setUserData(response.data);
      } catch (error) {
        alert("Erro ao pegar informações do artista");
      }
    };
    const getAlbums = async () => {
      try {
        const response = await api.get(`/albums/fromArtist/${loggedUserId}`);
        setAlbums(response.data);
      } catch (error) {
        alert("Erro ao pegar informaç~eos dos álbums");
      }
    };
    if (loggedUserId) {
      getUserData();
      getAlbums();
    }
  }, [loggedUserId]);

  if (!userData) return "Carregando!";
  return (
    <div>
      <div className="banner">
        <img src={userData.image} alt="" className="banner-cover" />
        <div className="banner-content">
          <p className='Nome'>{userData.name}</p>
          <button className='IconButton' onClick={() => navigate('/editArtist')}>
            <Icon iconType="Edit" />
          </button>
        </div>
        <button className='IconButton LogoutButton' onClick={() => handleLogout()}>
          <Icon iconType="SignOut" />
          <p>Sair</p>
        </button>
      </div>
      <main className='MainContent'>
        {albums ? albums.map((album,i) => (
          <Album
            key={i}
            children={album.name}
            src={album.image}
            onClick={() => { resetAlbumContext();navigate("/album/" + album._id)}}
          />
        )) : (
          <p>Carregando...</p>
        )}
        <AddAlbum onClick={() => navigate("/createAlbum")} />
      </main>
    </div>
  );
};

export default Artist;