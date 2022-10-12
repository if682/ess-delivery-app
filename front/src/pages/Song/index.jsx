import "./styles.css"
import Song from "../../components/Song"
import {useParams} from "react-router-dom"
import React,{useState, useEffect} from "react";
import { api} from '../../services/api';
import Play from "../../components/PlayMusic"
import { Routes } from "react-router";

const Songs = () => {
    const [songs, setSongs] = useState([]);
    const params = useParams();

    useEffect(() =>{
     const getData = async () => {
      try {
        const response = await api.get('/songs/fromAlbum/' + params.albumId)
        setSongs(response.data)
      } catch (error) {
        alert("error")
      }
     } 
     getData()
    }, []);
  
    let rows = []
    console.log("oiie", songs)
    return(
        <div className="Song">
            <div className="Banner">
              <h1>Album teste haha</h1>
            </div>
            <div className="Songs">
                {songs.map((song, index) => (
                  <div className="song" key={index}>
                    <Song number={index+1} name={song.name} handlePlay={false} handleDelete={false} participations={song.participations}/>
                  </div>)
                )}
            </div>
            <div className="Play">
              <Play songs={songs}/>
            </div>
        </div>
        
    );
};

export default Songs;