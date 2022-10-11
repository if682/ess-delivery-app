import './styles.css'
import Icon from '../Icon';
const Song = ({name,duration,participations,number,handleDelete,handlePlay,...props}) => {
    return(
        <div className='Song-Wrapper' onClick={handlePlay} {...props}>
            <label className='SongNumber'>{number} </label>
            <label className='SongName'>{name} </label>
            <label className='SongParticipations'>{participations} </label> 
            <label className='SongDuration'>{duration} </label>
            {handleDelete&&!handlePlay?
            <Icon iconType="Remove" className="Remove" onClick={handleDelete}/>:""}
        </div>
    );
};
export default Song;