import './styles.css'
import Icon from '../Icon';
import React,{useState} from "react";

const Play = ({songs,...props}) => {
    const [playIndex, setPlayIndex] = useState(0);

    const previousSongs = () => {
        if(playIndex > 0) setPlayIndex(playIndex-1)
    }
    const nextSongs = () => {
        if(playIndex < songs.length-1) setPlayIndex(playIndex+1)
    }
    // console.log("olha aqui aaa",playIndex)
    // console.log(songs[playIndex].name)

    return(
        <div className='Play-Wrapper'{...props}>
            <div className='name'>
                <label className='PlayName'>{songs[playIndex].name}</label>
            </div>
            <div className='control'>
                <button className='IconButton' onClick={previousSongs}>
                    <Icon iconType="Start" className="Start"/>
                </button>
                <button className='IconButton'>
                    <Icon iconType="Play" className="Play"/>
                </button>
                <button className='IconButton' onClick={nextSongs}>
                    <Icon iconType="End" className="End"/>
                </button>
            </div>
            <button className='download IconButton'>
                <Icon iconType="Download" className="Download"/>
            </button>
        </div>
    );
};
export default Play;