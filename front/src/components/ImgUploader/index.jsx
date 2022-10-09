import {React, useState} from "react";
import { ReactComponent as ImgBox } from "../../assets/Img_box_light.svg";
import './styles.css'

const ImgUploader = ({value,...props}) =>{
	const [selectedFile, setSelectedFile] = useState(value);
    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};
    return (
        
        <div className="ImgUploader"{...props}>
            <label className="FileSelector-Clicker" for="arquive"></label>
            <input name="arquive" id="arquive" className="fileSelector" value={undefined} type="file" onChange={changeHandler} />             
            {selectedFile?            
                <img src={URL.createObjectURL(selectedFile)} alt={URL.createObjectURL(selectedFile)} height="100%" width="100%" />
                :
                <>            
                    <ImgBox/>
                    <label className="Uploader-Label">Upload</label>
                </>
            }    
        </div>
    );
};

export default ImgUploader;
