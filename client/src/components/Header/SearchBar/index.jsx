import { useEffect, useState } from "react";
import "./styles.css";
import SearchResult from "./SearchResult";

const SearchBar = () => {
  const [movies, setMovies] = useState([]);
  const [key, setKey] = useState([]);

  useEffect(() =>{
    console.log(key)
    const fetchMovies = async (url) =>{
      const dataResponse = await fetch(url, {
        method: 'GET'
      })
      const dataJson = await dataResponse.json();
      setMovies(dataJson.results)
      console.log(movies)
    }
    fetchMovies(`https://api.themoviedb.org/3/search/movie?api_key=ecfc4f2c404a65285db2275752af4018&language=pt-BR&query=${key}&page=1&include_adult=false`)
  }, [key])

  const handleInput =(word) =>{
    let keyParts = word.split(' ');
    let keyForSearch = ''
    for(var i = 0; i < keyParts.length; i++){
      keyForSearch += keyParts[i];
      if(i !== keyParts.length - 1){
        keyForSearch += '%20';
      }
    }
    setKey(keyForSearch);
  }

  const handleInputFocus = () => {
    document.querySelector('.search-result-container').style.display = 'flex'
  }

  return (
    <div>
      <input type="text" placeholder="Search a movie..." onFocus={handleInputFocus} onChange={(e) => handleInput(e.target.value)}/>
      <section className="search-results">
      
      <div class="search-result-container">
        {
          movies.map((movie) => (
            <SearchResult titulo={movie.title} id={movie.id}/>
          ))
        }
      </div>
      
      </section>
    </div>
  );
};

export default SearchBar;
