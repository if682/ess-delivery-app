import Input from "../../components/Input";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import "./styles.css"


const CreateMusic = () => {
    return(
        <div className="Back">
            <p className="Titulo">Cadastrar nova música</p>
            <form className = "Formulario" action="">
                <Input children={"Nome da Música"}/>
                <Input children={"Link da Música"}/>
                <Input children={"Participações"}/>
                <Checkbox> Explícito </Checkbox>
                <Button children={"Salvar"}></Button>
            </form>
        </div>
    );
};

export default CreateMusic;