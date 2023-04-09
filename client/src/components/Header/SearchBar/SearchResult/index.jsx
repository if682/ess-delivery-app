import "./style.css";
import { useNavigate } from "react-router-dom";

const SearchResult = (props) => {
  const navigate = useNavigate()
  const handleSelectedMovie = async () => {
    const fetchDetails = async (url) =>{
        const dataResponse = await fetch(url, {
          method: 'GET'
        })
        const dataJson = await dataResponse.json(); 
        let posterPath = `https://image.tmdb.org/t/p/w500${dataJson.backdrop_path}`
        localStorage.setItem('title', dataJson.title);
        localStorage.setItem('year', dataJson.release_date);
        localStorage.setItem('description', dataJson.overview);
        localStorage.setItem('id', dataJson.id);
        localStorage.setItem('posterPath', posterPath)
        localStorage.setItem('duration', dataJson.runtime)
        navigate('/movieinfo')
      }
    fetchDetails(`https://api.themoviedb.org/3/movie/${props.id}?api_key=ecfc4f2c404a65285db2275752af4018&language=pt-BR`)
  }

  return (
    <div>
        <button className= "movie-selected-from-search" onClick={handleSelectedMovie}> {props.titulo}</button>
    </div>
  );
};

export default SearchResult;
