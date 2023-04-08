import Header from "../../components/Header";
import ProfileFilmsList from "../../components/ProfileFilmsList";
import ProfileInfo from "../../components/ProfileInfo";
import ProfileSections from "../../components/ProfileSections";
import ProfileReviewsList from "../../components/ProfileReviewsList";
import { useLocation } from 'react-router-dom';


const Profile = () => {

  const location = useLocation();

  const renderProfileComponent = () => {
    const query = new URLSearchParams(location.search);
    const tab = query.get('tab');

    if (tab === 'reviews') {
      return <ProfileReviewsList />;
    } else {
      return <ProfileFilmsList />;
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