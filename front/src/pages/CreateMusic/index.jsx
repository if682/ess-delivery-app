import "./styles.css"
import Input from "../../components/Input"
import Checkbox from "../../components/Checkbox"
import Button from "../../components/Button"
import React,{useState, useCallback} from "react";
import { useNavigate } from "react-router-dom";
import { api} from '../../services/api';
const CreateMusic = () => {
    const navigate = useNavigate();
    const [name, setName] = useState(null);
    const [url, setUrl] = useState(null);
    const [participations, setParticipations] = useState(null);
    const [explicit, setExplicit] = useState(null);

    const onSubmit = async(e) => {
        alert(explicit);
        e.preventDefault();
        if(name&&url){
            const body = {name,url,participations,explicit};            
            try {
                const response = await api.post('/songs',body);
                console.log(response);
            } catch (error) {
                alert("ayooo");
            }
            
        }
        else{
            alert("*Campo obrigatório não pode ser deixado vazio*");
        }
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