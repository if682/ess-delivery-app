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
                <Input className="EditInputs" children={"Nome"}/>
                <Input className="EditInputs" children={"País"}/>
                <Input className="EditInputs" children={"Estilo Musical"}/>
                <Button children={"Salvar"}></Button>
            </form>
        </div>
    );
};

export default EditArtist;