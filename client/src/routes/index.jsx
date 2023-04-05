import { Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile";
import Watchlist from "../pages/Watchlist";
import EditProfile from "../pages/EditProfile";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="watchlist" element={<Watchlist />} />
            <Route path="profile/editprofile" element={<EditProfile />} />
        </Routes>
    );
};

export default AppRoutes;