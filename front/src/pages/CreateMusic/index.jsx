import "./styles.css"
import Input from "../../components/Input"
import Checkbox from "../../components/Checkbox"
import Button from "../../components/Button"
import React,{useState} from "react";
import { useAlbum } from "../../contexts/Album";

const CreateMusic = () => {
    const [name, setName] = useState(null);
    const [url, setUrl] = useState(null);
    const [participation, setparticipation] = useState(null);
    const [explicit, setExplicit] = useState(false);
    const {handleAddSong} = useAlbum();

    const onSubmit = async(e) => {
        e.preventDefault();
        handleAddSong(name,url,participation,explicit);   
    };
    return(
        <div className="CreateMusic">
            <h1 className="title">Cadastrar nova música</h1>
            <form onSubmit={onSubmit} className="form">
            <Input placeholder="Nome" id="name" onChange={e => setName(e.target.value)}>Nome da música*</Input>
            <Input placeholder="Link" id="link" onChange={e => setUrl(e.target.value)}>Link da música*</Input>
            <Input placeholder="Participação" id="participation" onChange={e => setparticipation(e.target.value)}>Participação</Input>
            <Checkbox id="explicit" onClick={() => setExplicit(!explicit)}>Explícito</Checkbox>
            <Button type="submit">Salvar</Button>
            </form>

        </div>
    );
};

export default CreateMusic;