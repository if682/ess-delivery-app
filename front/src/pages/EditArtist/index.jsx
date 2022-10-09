import ImgUploader from "../../components/ImgUploader";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { api } from "../../services/api";
import "./styles.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditArtist = () => {
    const [nome, setNome] = useState('');
    const [pais, setPais] = useState('');
    const [genero, setGenero] = useState('');
    const navigate = useNavigate();


    const onSubmit = async (event) =>{
        event.preventDefault();
        const body = {"name": nome, "country": pais, "genre": genero};
        try{
            await api.put("/artists/", body);
            alert("Deu certo")
            navigate("/artist", {replace: true})
        }catch(error){
            alert("Algo deu errado.")
        }

    }

    return(
        <div className="Back">
            <p className="Titulo">Editar suas informações</p>
            <form className = "Formulario" onSubmit={onSubmit}>
                <ImgUploader></ImgUploader>
                <Input  value = {nome}   onChange={e => setNome(e.target.value)}   children={"Nome"}/>
                <Input  value = {pais}   onChange={e => setPais(e.target.value)}   children={"País"}/>
                <Input  value = {genero} onChange={e => setGenero(e.target.value)} children={"Estilo Musical"}/>
                <Button type = "submit" children={"Salvar"}></Button>
            </form>
        </div>
    );
};

export default EditArtist;