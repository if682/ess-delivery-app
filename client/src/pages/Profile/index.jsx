import Header from "../../components/Header";
import ProfileFilmsList from "../../components/ProfileFilmsList";
import ProfileInfo from "../../components/ProfileInfo";
import ProfileSections from "../../components/ProfileSections";

const Profile = () => {
  return (
    <>
      <Header />
      <ProfileInfo />
      <ProfileSections />
      <ProfileFilmsList />
    </>
  );
}

export default Profile;