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

  const handleAddSong = (name, link, participation, explicit) => {
    if(name&&link){        
        const newSong = {name, link, participation, explicit}
        const newSongs = [...songs, newSong]
        setSongs(newSongs);
        navigate("/createAlbum");
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
    songs,handleAddSong,resetAlbumContext,

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