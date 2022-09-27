import "./styles.css"
import Input from "../../components/Input"
import Checkbox from "../../components/Checkbox"
import Button from "../../components/Button"
import React,{useState} from "react";
const CreateMusic = () => {
    const [name, setName] = useState(null);
    const [link, setLink] = useState(null);
    const [participation, setParticipation] = useState(null);
    const [explicit, setExplicit] = useState(false);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id==="name"){
            setName(value);
        }
        if(id==="link"){
            setLink(value);
        }
        if(id==="participation"){
            setParticipation(value);
        }
        if(id==="explicit"){
            setExplicit(value);
        }
    }
    const handleSubmit = () => {
        if(name&&link){
            
        }

    }
    return(
        <div className="CreateMusic">
            <h1 className="title">Cadastrar nova música</h1>
            <form action="" className="form">
            <Input placeholder="Nome" id="name" onChange = {(e) => handleInputChange(e)}>Nome da música*</Input>
            <Input placeholder="Link" id="link" onChange = {(e) => handleInputChange(e)}>Link da música*</Input>
            <Input placeholder="Participação" id="participation" onChange = {(e) => handleInputChange(e)}>Participação</Input>
            <Checkbox id="explicit" >Explícito</Checkbox>
            <Button type="submit" onClick={()=>handleSubmit()}>Salvar</Button>
            </form>

        </div>
    );
};

export default CreateMusic;