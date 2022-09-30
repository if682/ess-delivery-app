import AddAlbum from "../../components/AddAlbum"
import Button from "../../components/Button"
import Album from "../../components/Album"
import Checkbox from "../../components/Checkbox"
import Icon from "../../components/Icon"
import ImgUploader from "../../components/ImgUploader"
import Input from "../../components/Input"
import Song from "../../components/Song"
import "./styles.css"
const CreateAlbum = () => {
    return(
        <div className="teste">
            CreateAlbum
            <AddAlbum onClick={()=>{alert("adiciona vain")}}></AddAlbum>
            <Button onClick={()=>{alert("butão vain")}}>vain</Button>
            <Album onClick={()=>{alert("album vain")}}></Album>
            <Checkbox>vain</Checkbox>
            <Icon iconType="Edit"></Icon>
            <Icon iconType="Remove"></Icon>
            <Icon iconType="SignOut"></Icon>
            <Icon iconType="ImgBox"></Icon>
            <ImgUploader></ImgUploader>
            <Input>Vain</Input>
            <Song number="1" name="eu" participations="eu" duration="4:20" handleDelete={()=>{alert("delete")}}></Song>
            <Song number="2" name="eu" participations="eu" duration="4:20" handlePlay={()=>{alert("play")}}></Song>
        </div>
    );
};

export default CreateAlbum;