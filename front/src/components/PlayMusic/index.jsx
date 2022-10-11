import './styles.css'
import Icon from '../Icon';
const Play = ({name,handleDownload,handlePlay,...props}) => {
    return(
        <div className='Play-Wrapper' onClick={handlePlay} {...props}>
            <div className='name'>
                <label className='PlayName'>{name} </label>
            </div>
            <div className='control'>
                <button className='IconButton'>
                    <Icon iconType="Start" className="Start"/>
                </button>
                <button className='IconButton'>
                    <Icon iconType="Play" className="Play" onClick={handlePlay}/>
                </button>
                <button className='IconButton'>
                    <Icon iconType="End" className="End"/>
                </button>
            </div>
            <div className='download'>
                <Icon iconType="Download" className="Download" onClick={handleDownload}/>
            </div>
        </div>
    );
};
export default Play;