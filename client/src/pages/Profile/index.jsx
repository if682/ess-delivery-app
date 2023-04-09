import Header from "../../components/Header";
import ProfileFilmsList from "../../components/ProfileFilmsList";
import ProfileInfo from "../../components/ProfileInfo";
import ProfileSections from "../../components/ProfileSections";
import ProfileReviewsList from "../../components/ProfileReviewsList";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import api from "../../services/api";

const Profile = () => {

  const userId = localStorage.getItem("userId");

  const [userReviews, setUserReviews] = useState();

  useEffect(() => {
      const fetchUserReviews = async () => {
          try {
            const response = await api.get(`review/${userId}`);
            setUserReviews(response.data);
          } catch (error) {
            alert("Erro ao pegar reviews do usuário");
          }
        };
        fetchUserReviews();
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
      return <ProfileFilmsList movies={filteredReviews} />;
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