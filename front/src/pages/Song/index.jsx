import "./styles.css";
import Song from "../../components/Song";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { api } from '../../services/api';
import Play from "../../components/PlayMusic";
import { Routes, useNavigate } from "react-router";
import Icon from '../../components/Icon';
import Album from '../../components/Album';

const Songs = () => {
  const navigate = useNavigate()
  const [songs, setSongs] = useState([]);
  const [album, setAlbum] = useState({});
  const [playIndex, setPlayIndex] = useState(0);
  const params = useParams();

  useEffect(() => {
    const getSongs = async () => {
      try {
        const response = await api.get('/songs/fromAlbum/' + params.albumId);
        setSongs(response.data);
      } catch (error) {
        alert("error");
      }
    };
    getSongs();
    const getAlbumData = async () => {
      try {
        const response = await api.get('/albums/' + params.albumId);
        setAlbum(response.data);
      } catch (error) {
        alert("error");
      }
    };
    getAlbumData();
  }, []);

  const handleNavigateEditAlbum = () => {
    navigate('/editAlbum', ({
      state: {
        album,
        songs
      }
    }))
  }

  return (
    <div className="Song">
      <div className="Banner">
        <div className="name">
          <div className="album">
            <Album
              src={album.image}
              onClick={() => navigate("/album/" + album._id)}
            />
          </div>
          <h1>{album.name ?? "Carregando..."}</h1>
          <button className='IconButton' onClick={handleNavigateEditAlbum}>
            <Icon iconType="Edit" />
          </button>
        </div>
        <div>
          <button className='IconButton LogoutButton' onClick={() => navigate(-1)}>
            <Icon iconType="Back" />
            <p>Voltar</p>
          </button>
        </div>
      </div>
      <div className="Songs">
        {songs.map((song, index) => (
          <div className="song" key={index}>
            <Song number={index + 1} name={song.name} handlePlay={() => setPlayIndex(index)}  participations={song.participations} />
          </div>)
        )}
      </div>
      {
        songs.length > 0 && (
          <div className="Play">
            <Play
              songs={songs}
              playIndex={playIndex}
              setPlayIndex={setPlayIndex}
            />
          </div>
        )
      }

    </div>

  );
};

export default Songs;