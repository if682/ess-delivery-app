import "./style.css";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../../../../Context/MovieContext";
import { useContext } from "react";

const SearchResult = (props) => {
  const [movie, setMovie] = useContext(MovieContext)
  const navigate = useNavigate()

  const handleSelectedMovie = async () => {
    const fetchDetails = async (url) =>{
        const dataResponse = await fetch(url, {
          method: 'GET'
        })
        const dataJson = await dataResponse.json(); 
        let posterPath = `https://image.tmdb.org/t/p/w500${dataJson.backdrop_path}`

        setMovie(movie => ({...movie, title: dataJson.title, description: dataJson.overview, posterPath: posterPath,  releaseDate: dataJson.release_date, id: dataJson.id, duration: dataJson.runtime}))
        document.querySelector('.search-result-container').style.display = 'none'
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
