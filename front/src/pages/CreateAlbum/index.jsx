
import "./styles.css"
import ImgUploader from "../../components/ImgUploader";
import Input from "../../components/Input"
import Button from "../../components/Button"
const CreateAlbum = () => {
    return(
        <div className="CreateAlbum">
            <h1 className="title">Cadastrar novo álbum</h1>
            <div className="CreateAlbum-Body">
                <form className="Form-Album">                
                    <ImgUploader id="ImgAlbum"></ImgUploader>
                    <Input placeholder="Nome" id="inputAlbum">Nome*</Input>
                    <Input placeholder="aaaa" id="inputAlbum">Ano*</Input>
                </form>
                <div className="SongsAdded">

                </div>
                <div className="AddSongs-Button" onClick={()=>{alert("ham")}}>+ Adicionar Músicas</div>
            </div>
            <Button id="SaveAlbum">Salvar</Button>
        </div>
        
    );
};

export default CreateAlbum;