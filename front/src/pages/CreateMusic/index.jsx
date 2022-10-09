import "./styles.css"
import Input from "../../components/Input"
import Checkbox from "../../components/Checkbox"
import Button from "../../components/Button"
import React,{useState, useCallback} from "react";
import { useNavigate } from "react-router-dom";
import { api} from '../../services/api';
import { useLocation } from 'react-router-dom';
import { useAlbum } from "../../contexts/Album";

const CreateMusic = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [name, setName] = useState(null);
    const [url, setUrl] = useState(null);
    const [participations, setParticipations] = useState(null);
    const [explicit, setExplicit] = useState(false);
    const {handleAddSong} = useAlbum();

    const onSubmit = async(e) => {
        e.preventDefault();
        handleAddSong(name,url,participations,explicit);   
    };
    return(
        <div className="CreateMusic">
            <h1 className="title">Cadastrar nova música</h1>
            <form onSubmit={onSubmit} className="form">
            <Input placeholder="Nome" id="name" onChange={e => setName(e.target.value)}>Nome da música*</Input>
            <Input placeholder="Link" id="link" onChange={e => setUrl(e.target.value)}>Link da música*</Input>
            <Input placeholder="Participação" id="participation" onChange={e => setParticipations(e.target.value)}>Participação</Input>
            <Checkbox id="explicit" onClick={() => setExplicit(!explicit)}>Explícito</Checkbox>
            <Button type="submit">Salvar</Button>
            </form>

        </div>
    );
};

export default CreateMusic;