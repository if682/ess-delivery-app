import { useContext, useEffect, useMemo } from 'react';
import { useCallback } from 'react';
import { createContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { api, setAuthToken } from '../services/api';

const AlbumContext = createContext();

export const AlbumProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(undefined);
  const [year, setYear] = useState(null);
  const [songs,setSongs] =  useState([]);
  const navigate = useNavigate();

  const handleAddAlbum = async() =>{
    if(name&&year){
      const body = {name,image,year,songs};            
      try {
          const response = await api.post('/albums',body,{
            headers:{
              Authorization:`Bearer ${localStorage.getItem('token')}`
            }
          });
          console.log(response);
          resetAlbumContext();
          //navigate("/album");
      } catch (error) {
          console.log(error);
      }            
    }
    else if(!songs){
        alert("*Album precisa conter uma música*");
    }
    else{
        alert("*Campo obrigatório não pode ser deixado vazio*");
    }
  }
  const handleAddSong = async (name, url, participation, explicit) => {
    if(name&&url){        
        try {
          const response = await api.get('/songs');
          const songsDB = response.data.songs;
          //console.log(songsDB);
          if(!songsDB.some(song=>(song.name === name)||(song.url === url))
          &&!songs.some(song=>(song.name === name)||(song.url === url))){
            
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/;
            const match = url.match(regExp);
            if(match && match[2].length == 11){
              const newSong = {name, url, participation, explicit}
              const newSongs = [...songs, newSong]
              setSongs(newSongs);
              navigate("/createAlbum");
            }
            else{
              alert("url não é válido");
            }
          }
          else{
            alert("Esta música já existe");
          }
      } catch (error) {
          alert(error);
          navigate("/createAlbum");
      }    
        
    }
    else{
        alert("*Campo obrigatório não pode ser deixado vazio*");
    }
  }
  const resetAlbumContext = () =>{
    setName("");
    setImage(undefined);
    setYear(null);
    setSongs([]);
  }
  
  const value = useMemo(() => ({
    name,setName,
    image,setImage,
    year,setYear,
    songs,setSongs,handleAddSong,handleAddAlbum,resetAlbumContext,

  }), [name, image, year, songs]);

  return (
    <AlbumContext.Provider value={value}>
      {children}
    </AlbumContext.Provider>
  );
};

export const useAlbum = () => {
  const context = useContext(AlbumContext);
  if (!context) throw new Error("Album must be used within a LoginProvider");
  return context;
};