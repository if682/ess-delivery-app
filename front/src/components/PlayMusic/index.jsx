import React,{useState} from "react";
import ReactPlayer from 'react-player'
import './styles.css'
import Icon from '../Icon';

const Play = ({songs,playIndex, setPlayIndex,...props}) => {
    const [playing, setPlaying] = useState(false);

    const previousSongs = () => {
        if(playIndex > 0) setPlayIndex(playIndex-1)
    }

    const nextSongs = () => {
        if(playIndex < songs.length-1) setPlayIndex(playIndex+1)
    }
    
    const playPause = () => {
        setPlaying(p => !p)
    }


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
                    <Icon iconType={playing? "Pause" : "Play"} onClick={playPause} className="Play"/>
                </button>
                <button className='IconButton' onClick={nextSongs}>
                    <Icon iconType="End" className="End"/>
                </button>
            </div>
            <button className='download IconButton'>
                {/* <Icon iconType="Download" className="Download"/> */}
            </button>
            <div className='ReactPlayer'>
                <ReactPlayer
                    height={0}
                    width={0}
                    url={songs[playIndex].url}
                    playing={playing}
                />
            </div>
        </div>
    );
};
export default Play;