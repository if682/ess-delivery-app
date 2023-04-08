import { Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import Movielist from "../pages/Movielist";
import Movielists from "../pages/Movielists";
import Likes from "../pages/Likes";
import Watched from "../pages/Watched";
import Login from "../pages/Login";
import RecoverPassword from "../pages/ForgetPassword";
import PassChange from "../pages/ForgetPassword/ChangePassword";
import MovieInfo from "../pages/MovieInfo";
import UserRegister from "../pages/UserRegister";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="profile/editprofile" element={<EditProfile />} />
            <Route path="profile/movielists" element={<Movielists />} />            {/* todas as listas do usuário */}
            <Route path="profile/movielists/movielist" element={<Movielist />} />   {/* lista específica */}
            <Route path="profile/likes" element={<Likes />} />                      {/* filmes curtidos */}
            <Route path="profile/watched" element={<Watched />} />                  {/* filmes assistidos */}
            <Route path="login" element={<Login/>} />   {/* Login */}
            <Route path="login/recover" element={<RecoverPassword/>} />   {/* Recover Password */}
            <Route path="login/newpassword" element={<PassChange/>} />   {/* Change Password */}
            <Route path="movieInfo" element={<MovieInfo/>} />   {/* Informações de um filme  */}
            <Route path="signup" element={<UserRegister/>} />   {/* Register User */}
        </Routes>
    );
};

export default AppRoutes;