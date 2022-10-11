import "./styles.css"
import ImgUploader from "../../components/ImgUploader";
import Input from "../../components/Input"
import Button from "../../components/Button"
import Song from "../../components/Song"
import React,{useState, useEffect} from "react";
import { useAlbum } from "../../contexts/Album";
import { api} from '../../services/api';
import { useNavigate } from "react-router-dom";
import Play from "../../components/PlayMusic"

const Songs = () => {
    let rows = []
    for (let i = 0; i < 5; i++) {
      rows.push(<div className="song">
        <Song number={i+1} name={"Música Teste"} handlePlay={false} handleDelete={true} participations={'MD e convidados'} duration={3}/>
        </div>)
    }
    return(
        <div className="Song">
            <div className="Banner">
              <h1>Album teste haha</h1>
            </div>
            <div className="Songs">
                {rows}
            </div>
            <div className="Play">
              <Play name={'you broke me first'}/>
            </div>
        </div>
        
    );
};

export default Songs;