import './styles.css'
import Icon from '../Icon';
const Play = ({name,handleDownload,handlePlay,...props}) => {
    return(
        <div className='Play-Wrapper' onClick={handlePlay} {...props}>
            <div className='name'>
                <label className='PlayName'>{name} </label>
            </div>
            <div className='control'>
                <Icon iconType="Start" className="Start"/>
                <Icon iconType="Play" className="Play" onClick={handlePlay}/>
                <Icon iconType="End" className="End"/>
            </div>
            <div className='download'>
                <Icon iconType="Download" className="Download" onClick={handleDownload}/>
            </div>
        </div>
    );
};
export default Play;