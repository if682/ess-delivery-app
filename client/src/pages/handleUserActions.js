import { useNavigate } from "react-router-dom";

const userId = localStorage.getItem("userId");
const port = 4001;

const HandleUserActions = () => {
  const navigate = useNavigate();

  const handleUserAvatarClick = () => {
    let path = `/profile`;
    navigate(path);
  };

  const handleUserHistoryClick = () => {
    let path = `/profile?tab=movies`;
    navigate(path);
  };

  const handleUserLikedFilmsClick = () => {
    let path = `/profile/likes`;
    navigate(path);
  };

  const handleUserReviewsClick = () => {
    let path = `/profile?tab=reviews`;
    navigate(path);
  };

  const handleUserMovielistsClick = () => {
    let path = `/profile/movielists`;
    navigate(path);
  };

  const handleLikeClick = (title) => {
    alert(`Curtiu o filme ${title}`);
  };

  const getMovieInfo = async (movieId) => {
    const dataResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=ecfc4f2c404a65285db2275752af4018&language=pt-BR`, {
      method: 'GET'
    });
    const movieData = await dataResponse.json();
    return movieData;
  };

  const handleAddToMovielistClick = async (movieId, lista) => {
    const movieData = await getMovieInfo(movieId);
  
    try{
      let response = await fetch(`http://localhost:${port}/list/${userId}/${lista}`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userId: userId,
            listName: lista,
            movieId: movieData.id.toString(),
            title: movieData.title,
            cover: movieData.poster_path,
            description: movieData.overview,
          }),
      });
  
      if(response.ok){
          console.log(response);
          console.log("O filme foi adicionado a lista.");
      }else{
          console.log("Não consegui adicionar o filme a lista.");
      }
    }catch(error){
      console.log(error);
    }
  };

  const handleMovieClick = () => {
    let path = `/movieinfo`;
    navigate(path);
  };

  return {
    handleUserAvatarClick,
    handleUserHistoryClick,
    handleUserLikedFilmsClick,
    handleUserReviewsClick,
    handleUserMovielistsClick,
    handleLikeClick,
    handleAddToMovielistClick,
    handleMovieClick,
    getMovieInfo,
  };
};

export default HandleUserActions;
