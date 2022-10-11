import React from "react";
import { ReactComponent as Edit } from "../../assets/Edit_light.svg";
import { ReactComponent as ImgBox } from "../../assets/Img_box_light.svg";
import { ReactComponent as Remove } from "../../assets/Remove_light.svg";
import { ReactComponent as SignOut } from "../../assets/Sign_out.svg";
import { ReactComponent as Download } from "../../assets/download.svg";
import { ReactComponent as Play } from "../../assets/play.svg";
import { ReactComponent as Start } from "../../assets/control-start.svg";
import { ReactComponent as End } from "../../assets/control-end.svg";
import './styles.css'
const Icon = ({iconType, className, ...props}) =>{
    return (
        <button className={`Icon ${className}`} {...props}>
            {
                (iconType==="Edit")?<Edit/>
                :(iconType==="Remove")?<Remove/>
                :(iconType==="SignOut")?<SignOut/>
                :(iconType==="ImgBox")?<ImgBox/>
                :(iconType==="Download")?<Download/>
                :(iconType==="Play")?<Play/>
                :(iconType==="Start")?<Start/>
                :(iconType==="End")?<End/>
                :""
                
            }   
        </button>
    );
};

export default Icon;
