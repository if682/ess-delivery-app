import React from "react";
import './styles.css'
import { useNavigate } from "react-router-dom";
const Album = ({children,src,...props}) =>{
    const navigate = useNavigate();
    return (
        <div className="Album" onClick={()=>navigate("/login")} {...props}>
            {src?<img src={src} alt="" className="AlbumImg"/>:<div className="AlbumImg"></div>}          
            <label className="Album-Label">{children}</label>    
        </div>
    );
};

export default Album;
