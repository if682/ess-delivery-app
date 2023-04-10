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

  const handleAddToMovielistClick = async (title, lista) => {
    //no momento estou recebendo o título mas devo receber o id do filme
    //ou talvez mais infos do filme(?)

      //let movieIdS = movieId.toString();
      console.log("userId: " + userId);
      console.log("lista: " + lista);
      console.log("title: " + title);
      try{
        let response = await fetch(`http://localhost:${port}/list/${userId}/${lista}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              userId: userId,
              listName: lista,
              movieId: "1245", //a ser alterado
              title: title,
              cover: "xxxx", //a ser alterado
              description: "filme top" //a ser alterado
            }),
        });

        if(response.ok){
            console.log(response);
            console.log("O filme foi adicionado a lista.");
        }else{
            console.log("Erro no POST.");
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
  };
};

export default HandleUserActions;
