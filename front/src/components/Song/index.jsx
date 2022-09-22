import './styles.css'
const Song = ({name,duration,participations,number,handleDelete,handlePlay,...props}) => {
    return(
        <div className='Song-Wrapper' onClick={handlePlay}>
            <label className='SongNumber'>{number} </label>
            <label className='SongName'>{name} </label>
            <label className='SongParticipations'>{participations} </label>
            <label className='SongDuration'>{duration} </label>
            {handleDelete&&!handlePlay?
            <div className='DeleteSong-Wrapper' onClick={handleDelete}{...props}>
                <div className='DeleteSong-Circle'>
                    <div className='DeleteSong-Bar'></div>
                </div>
            </div>:""}
        </div>
    );
};
export default Song;