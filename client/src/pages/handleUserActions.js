import { useNavigate } from "react-router-dom";

const HandleUserActions = () => {
  const navigate = useNavigate();

  const handleUserAvatarClick = (username) => {
    alert(`Aqui deve ir para o perfil de ${username}`);
    let path = `/profile`;
    navigate(path);
  };

  const handleUserWatchedFilmsClick = (username) => {
    alert(`Aqui deve ir para os filmes assistidos de ${username}`);
    let path = `/profile/watched`;
    navigate(path);
  };

  const handleUserLikedFilmsClick = (username) => {
    alert(`Aqui deve ir para os likes de ${username}`);
    let path = `/profile/likes`;
    navigate(path);
  };

  const handleUserReviewsClick = (username) => {
    alert(`Aqui deve ir para as reviews de ${username}`);
  };

  const handleUserMovielistsClick = (username) => {
    alert(`Aqui deve ir para as listas de filmes de ${username}`);
    let path = `/profile/movielists`;
    navigate(path);
  };

  const handleLikeClick = (title) => {
    alert(`Curtiu o filme ${title}`);
  };

  const handleAddToMovielistClick = (title) => {
    alert(`Aqui deve perguntar para qual movielist se deseja adicionar o filme ${title}`);
  };

  const handleMovieClick = (title) => {
    alert(`Aqui deve ir para a página do filme ${title}`);
  };

  return {
    handleUserAvatarClick,
    handleUserWatchedFilmsClick,
    handleUserLikedFilmsClick,
    handleUserReviewsClick,
    handleUserMovielistsClick,
    handleLikeClick,
    handleAddToMovielistClick,
    handleMovieClick,
  };
};

export default HandleUserActions;
