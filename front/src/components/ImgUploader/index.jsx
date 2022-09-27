import {React, useState} from "react";
import './styles.css'
import axios from 'axios';

const ImgUploader = ({src,...props}) =>{
    
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const changeHandler = (event) => {
		setSelectedFile(URL.createObjectURL(event.target.files[0]));
		setIsFilePicked(true);
	};
    return (
        
        <div className="ImgUploader" file={selectedFile} {...props}>
            <label className="FileSelector-Clicker" for="arquive"></label>
            <input name="arquive" id="arquive" className="fileSelector" type="file" onChange={changeHandler}/>             
            {isFilePicked?            
            <img src={selectedFile} alt="Uploaded File" height="100%" width="100%"/>
            :
            <>            
            <img className="Uploader-Placeholder" onChange={changeHandler} src={require("./imgIcon.png") }></img>
            <label className="Uploader-Label">Upload</label>
            </>
            }    
        </div>
    );
};

export default ImgUploader;
