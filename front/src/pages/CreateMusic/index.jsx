import "./styles.css"
import Input from "../../components/Input"
import Checkbox from "../../components/Checkbox"
import Button from "../../components/Button"
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { api, setAuthToken } from '../services/api';
const CreateMusic = () => {
    const navigate = useNavigate();
    const [name, setName] = useState(null);
    const [link, setLink] = useState(null);
    const [participation, setParticipation] = useState(null);
    const [explicit, setExplicit] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(name&&link){
            alert("ayooo");
        }
        else{
            alert("*Campo obrigatório não pode ser deixado vazio*");
        }
    }
    return(
        <div className="CreateMusic">
            <h1 className="title">Cadastrar nova música</h1>
            <form onSubmit={onSubmit} className="form">
            <Input placeholder="Nome" id="name" onChange={e => setName(e.target.value)}>Nome da música*</Input>
            <Input placeholder="Link" id="link" onChange={e => setLink(e.target.value)}>Link da música*</Input>
            <Input placeholder="Participação" id="participation" onChange={e => setParticipation(e.target.value)}>Participação</Input>
            <Checkbox id="explicit" onChange={e => setExplicit(e.target.value)}>Explícito</Checkbox>
            <Button type="submit">Salvar</Button>
            </form>

        </div>
    );
};

export default CreateMusic;