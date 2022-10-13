import { useContext, useEffect, useMemo } from 'react';
import { useCallback } from 'react';
import { createContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { api, setAuthToken } from '../services/api';
import { toBase64} from '../services/base64';

const AlbumContext = createContext();

export const AlbumProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(undefined);
  const [year, setYear] = useState(null);
  const [songs,setSongs] =  useState();
  const [album,setAlbum] =  useState();
  const navigate = useNavigate();

  const postNewSongs = async () =>{
    const newSongs = songs.filter(song=>!song._id);
    try {
      newSongs.forEach(async song=>{
      const body = {name:song.name,url:song.url,participation:song.participation,explicit:song.explicit,album:album._id}  
      const responseNewSong = await api.post('/songs',body);
      console.log(responseNewSong.data);
      });
    } catch (error) {
        console.log(error);
    }
  }
  const deleteOldSongs = async (oldSongs) =>{
    const songsToBeRemoved = oldSongs.filter(oldSong=>!songs.includes(oldSong));
    console.log(oldSongs,songs,songsToBeRemoved)
    try {
      songsToBeRemoved.forEach(async song=>{
        const responseDeleteSong = await api.delete(`/songs/${song._id}`);
        console.log(responseDeleteSong.data);
       });
    } catch (error) {
      console.log(error);
    }
  }
  const putAlbum = async ()=>{
    try {
      const responseSongs = await api.get(`/songs/fromAlbum/${album._id}`);
      const putSongsId = responseSongs.data.map(song=>{return song._id});
      console.log(responseSongs,putSongsId)
      const body = {name,image:await toBase64(image),year, songs:putSongsId};
        const responseAlbum = await api.put(`/albums/${album._id}`,body);
        console.log(responseAlbum);
    
    } catch (error) {
        console.log(error);
    }
  }
  const handleEditAlbum = async(oldSongs) => {
    if(name&&year){
      try {
          const responseAlbums = await api.get(`/albums/fromArtist/${album.artist}`);
          const albumsDB = responseAlbums.data;
          if(albumsDB.some(albumDB=>(albumDB.name === name &&
              albumDB._id !== album._id))){
              alert("Já existe um álbum com este nome");
          }
          else{
            await postNewSongs();
            await deleteOldSongs(oldSongs);                          
            await putAlbum();     
            resetAlbumContext();
            navigate(`/album/${album._id}`);
          }
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
  const handleAddAlbum = async() =>{
    if(name&&year){
      const body = {name,image:await toBase64(image),year,songs};            
      try {
          const response = await api.post('/albums',body,{
            headers:{
              Authorization:`Bearer ${localStorage.getItem('token')}`
            }
          });
          console.log(response);
          resetAlbumContext();
          navigate("/artist");
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
              navigate(-1);
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
          navigate(-1);
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
    setAlbum({});
  }
  
  const value = useMemo(() => ({
    name,setName,
    image,setImage,
    year,setYear,
    songs,setSongs,
    album,setAlbum,
    handleAddSong,handleAddAlbum,
    handleEditAlbum,resetAlbumContext,

  }), [name, image, year, songs,album]);

  return (
    <AlbumContext.Provider value={value}>
      {children}
    </AlbumContext.Provider>
  );
};

export const useAlbum = () => {
  const context = useContext(AlbumContext);
  if (!context) throw new Error("Album must be used within a AlbumProvider");
  return context;
};