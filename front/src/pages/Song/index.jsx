import "./styles.css";
import Song from "../../components/Song";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { api } from '../../services/api';
import Play from "../../components/PlayMusic";
import { Routes, useNavigate } from "react-router";

const Songs = () => {
  const navigate = useNavigate()
  const [songs, setSongs] = useState([]);
  const [playIndex, setPlayIndex] = useState(0);
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get('/songs/fromAlbum/' + params.albumId);
        setSongs(response.data);
      } catch (error) {
        alert("error");
      }
    };
    getData();
  }, []);

  return (
    <div className="Song">
      <div className="Banner">
        <h1>Album teste haha</h1>
        <button onClick={() => navigate(-1)}>voltar</button>
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