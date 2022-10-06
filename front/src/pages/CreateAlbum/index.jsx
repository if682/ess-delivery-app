
import "./styles.css"
import ImgUploader from "../../components/ImgUploader";
import Input from "../../components/Input"
import Button from "../../components/Button"
import Song from "../../components/Song"
import React,{useState, useEffect} from "react";
import { api} from '../../services/api';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const CreateAlbum = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [name, setName] = useState(null);
    const [image, setImage] = useState("");
    const [year, setYear] = useState(null);
    const [songs,setSongs] =  useState(location.state?location.state.album.songs:[]);

  useEffect(() => {
    navigate(".", { replace: true }); // <-- redirect to current path w/o state
  }, [navigate]);

    const deleteSong = (index,songs) => {
        const songsAux = [...songs];
        songsAux.splice(index,1);
        alert(JSON.stringify(songsAux));
        setSongs(songsAux);
        
    }
    /*const ShowSongs = ()=>{
        songs?songs.map((song,index,songs)=>{
        alert(JSON.stringify(song));
            return(
                    
                    <Song number={index+1} name={song.name} participations={song.participations?song.participations:""} 
                        handleDelete={()=>{
                            //songs.splice(index);
                            let songsAux = songs;
                            songsAux.splice(index);
                            setSongs(songsAux);
                        }
                    }></Song>
                    
            );
        }):"a"
    }*/

    const addSong = () => {
        navigate("/createMusic",{state:{album:{name:name,image:image,year:year,songs:songs}}});
    }
    const onSubmit = async(e) => {
        /*e.preventDefault();
        if(name&&year){
            const body = {name,image,year,songs};            
            try {
                const response = await api.post('/album',body);
                console.log(response);
            } catch (error) {
                alert("ayooo");
            }            
        }
        else{
            alert("*Campo obrigatório não pode ser deixado vazio*");
        }*/
    };
    
    return(
        <div className="CreateAlbum">
            <h1 className="title">Cadastrar novo álbum</h1>
            <div className="CreateAlbum-Body">
                <form className="Form-Album" >                
                    <ImgUploader id="ImgAlbum" onChange={e => setImage(e.target.getAttribute('file'))}></ImgUploader>
                    <Input placeholder="Nome" id="inputAlbum" onChange={e => setName(e.target.value)}>Nome*</Input>
                    <Input placeholder="aaaa" id="inputAlbum" onChange={e => setYear(e.target.value)}>Ano*</Input>
                </form>
                <div className="SongsAdded">
                    {songs?
                    
                    songs.map((song,index,songs)=> {
                        return <Song number={index+1} name={song.name} participations={song.participations?song.participations:""} 
                        handleDelete={()=>deleteSong(index,songs)}
                        key={song.name}
                        
                        /> 
                    })
                    :"ay"}
                    <div className="AddSongs-Button" onClick={()=>{addSong()}}>+ Adicionar Músicas</div>
                </div>
            </div>
            <Button id="SaveAlbum" type="submit">Salvar</Button>
        </div>
        
    );
};

export default CreateAlbum;