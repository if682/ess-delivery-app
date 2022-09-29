import React from "react";
import { ReactComponent as Edit } from "../../assets/Edit_light.svg";
import { ReactComponent as ImgBox } from "../../assets/Img_box_light.svg";
import { ReactComponent as Remove } from "../../assets/Remove_light.svg";
import { ReactComponent as SignOut } from "../../assets/Sign_out.svg";
import './styles.css'
const Icon = ({iconType, className, ...props}) =>{
    return (
        <button className={`Icon ${className}`} {...props}>
            {
                (iconType==="Edit")?<Edit/>
                :(iconType==="Remove")?<Remove/>
                :(iconType==="SignOut")?<SignOut/>
                :(iconType==="ImgBox")?<ImgBox/>
                :""
                
            }   
        </button>
    );
};

export default Icon;
