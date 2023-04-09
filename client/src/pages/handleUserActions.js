import { useNavigate } from "react-router-dom";

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

  const handleAddToMovielistClick = (title) => {
    alert(`Aqui deve perguntar para qual movielist se deseja adicionar o filme ${title}`);
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
  };
};

export default HandleUserActions;
