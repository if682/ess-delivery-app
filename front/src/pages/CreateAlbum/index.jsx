import "./styles.css"
import ImgUploader from "../../components/ImgUploader";
import Input from "../../components/Input"
import Button from "../../components/Button"
import Song from "../../components/Song"
import React,{useState, useEffect} from "react";
import { useAlbum } from "../../contexts/Album";
import { api} from '../../services/api';
import { useNavigate } from "react-router-dom";
const CreateAlbum = () => {
    const navigate = useNavigate();
    const {name,setName,image,setImage,year,setYear,songs,setSongs,handleAddAlbum} = useAlbum();
    const deleteSong = (index,songs) => {
        const songsAux = [...songs];
        songsAux.splice(index,1);
        setSongs(songsAux);
        
    }
    const addSong = () => {
        console.log(name,image,year,songs);
        navigate("/createMusic");
    }
    const onSubmit = async(e) => {
        e.preventDefault();
        handleAddAlbum();
    };
    
    return(
        <div className="CreateAlbum">
            <h1 className="title">Cadastrar novo álbum</h1>
            <div className="CreateAlbum-Body">
                <form className="Form-Album" >                
                    <ImgUploader id="ImgAlbum" value={image} onChange={e => setImage(e.target.files[0])}></ImgUploader>
                    <Input placeholder="Nome" value={name} id="inputAlbum" onChange={e => setName(e.target.value)}>Nome*</Input>
                    <Input placeholder="aaaa" value={year} id="inputAlbum" onChange={e => setYear(e.target.value)}>Ano*</Input>
                </form>
                <div className="SongsAdded">
                    {songs?
                    
                    songs.map((song,index,songs)=> {
                        return <Song number={index+1} name={song.name} participations={song.participations?song.participations:""} 
                        handleDelete={()=>deleteSong(index,songs)}
                        key={song.name}
                        
                        /> 
                    })
                    :""}
                    <div className="AddSongs-Button" onClick={()=>{addSong()}}>+ Adicionar Músicas</div>
                </div>
            </div>
            <Button id="SaveAlbum" type="submit" onClick={onSubmit}>Salvar</Button>
        </div>
        
    );
};

export default CreateAlbum;