import {React, useEffect, useState} from "react";
import { ReactComponent as ImgBox } from "../../assets/Img_box_light.svg";
import './styles.css'

const ImgUploader = ({value,...props}) =>{
	// const [selectedFile, setSelectedFile] = useState(value);
    // const changeHandler = (event) => {
	// 	setSelectedFile(event.target.files[0]);
	// };

    // useEffect(()=>{setSelectedFile(value)}, [value])

    return (
        
        <div className="ImgUploader"{...props}>
            <label className="FileSelector-Clicker" for="arquive"></label>
            <input name="arquive" id="arquive" className="fileSelector" value={undefined} type="file" />             
            {value?            
                <img src={URL.createObjectURL(value)} alt={URL.createObjectURL(value)} height="100%" width="100%" />
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
