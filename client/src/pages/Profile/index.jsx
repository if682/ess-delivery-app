import Header from "../../components/Header";
import ProfileFilmsList from "../../components/ProfileFilmsList";
import ProfileInfo from "../../components/ProfileInfo";
import ProfileSections from "../../components/ProfileSections";
import ProfileReviewsList from "../../components/ProfileReviewsList";

const Profile = () => {
  return (
    <>
      <Header />
      <ProfileInfo />
      <ProfileSections />
      <ProfileFilmsList />
      {/* <ProfileReviewsList /> */}
    </>
  );
}

export default Profile;