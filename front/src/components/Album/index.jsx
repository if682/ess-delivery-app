import React from "react";
import './styles.css'
const Album = ({children,src,...props}) =>{
    return (
        <div className="Album" {...props}>
            {src?<img src={src} alt="" className="AlbumImg"/>:<div className="AlbumImg"></div>}          
            <label className="Album-Label">{children}</label>    
        </div>
    );
};

export default Album;
