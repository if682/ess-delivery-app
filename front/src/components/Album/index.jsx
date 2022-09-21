import React from "react";
import './styles.css'
import { useNavigate } from "react-router-dom";
const Album = ({children,src,...props}) =>{
    const navigate = useNavigate();
    return (
        <div className="Album" onClick={()=>navigate("/login")} {...props}>
            <img src={src} alt="" className="AlbumImg"/>  
            <label className="Album-Label">{children}</label>    
        </div>
    );
};

export default Album;
