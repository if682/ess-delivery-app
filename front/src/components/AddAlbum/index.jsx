import React from "react";
import './styles.css'
const AddAlbum = ({...props}) => {
    return(
        <div className="AddAlbum" {...props}>
            <div className="Button-AddAlbum" >
                <div className="Cross">+</div>
            </div>   
            <label className="AddAlbum-Label">Adicionar</label>    
        </div>
    );
};

export default AddAlbum;