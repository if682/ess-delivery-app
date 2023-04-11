import Header from "../../components/Header";
import ProfileFilmsList from "../../components/ProfileFilmsList";
import ProfileInfo from "../../components/ProfileInfo";
import ProfileSections from "../../components/ProfileSections";
import ProfileReviewsList from "../../components/ProfileReviewsList";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import api from "../../services/api";
import { LoginContext } from "../../Context/LoginContext";
import { useContext } from "react";

const Profile = () => {

  const [context, setContext] = useContext(LoginContext)
  const userId = context.userId

  const [userReviews, setUserReviews] = useState();
  const [userHistory, setUserHistory] = useState([]);

  useEffect(() => {
      const fetchUserReviews = async () => {
          try {
            const response = await api.get(`review/${userId}`);
            setUserReviews(response.data);
          } catch (error) {
            alert("Erro ao pegar reviews do usuário");
          }
        };

        const fetchUserHistory = async () => {
          try {
            const response = await api.get(`list/${userId}/Historico`);
            console.log(response.data);
            console.log(Object.values(response.data));
            console.log(Object.values(response.data).flat());
            setUserHistory(Object.values(response.data).flat()); // o histórico é um array contendo os moviesId
          } catch (error) {
            alert("Erro ao pegar filmes do histórico do usuário");
          }
        };

        const fetchUserLists = async () => {
          try {
            const response = await api.get(`list/${userId}`);
            let data = await response.json();
            localStorage.setItem("userLists", JSON.stringify(Object.values(data).flat()));
            console.log("GET realizado com sucesso.");
            } catch (err) {
            console.log(err);
          }
        };

        fetchUserReviews();
        fetchUserHistory();
        fetchUserLists();
    }, []);

    const filteredReviews = Object.values(
      (userReviews?.reviews || []).reduce((groups, review) => {
        if (!groups[review.movieId]) {
          groups[review.movieId] = review;
        }
        return groups;
      }, {})
    );


  const location = useLocation();

  const renderProfileComponent = () => {
    const query = new URLSearchParams(location.search);
    const tab = query.get('tab');

    if (tab === 'reviews') {
      return <ProfileReviewsList data={userReviews} />;
    } else {
      return <ProfileFilmsList movies={userHistory} />;
    }
  };
  return (
    <>
      <Header />
      <ProfileInfo />
      <ProfileSections />
      {renderProfileComponent()}
    </>
  );
}

export default Profile;