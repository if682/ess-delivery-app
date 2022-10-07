import ImgUploader from "../../components/ImgUploader";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./styles.css"


const EditArtist = () => {
    return(
        <div className="Back">
            <p className="Titulo">Editar suas informações</p>
            <form className = "Formulario" action="">
                <ImgUploader></ImgUploader>
                <Input children={"Nome"}/>
                <Input children={"País"}/>
                <Input children={"Estilo Musical"}/>
                <Button children={"Salvar"}></Button>
            </form>
        </div>
    );
};

export default EditArtist;