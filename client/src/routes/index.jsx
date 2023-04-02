import { Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile";
import Watchlist from "../pages/Watchlist";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="watchlist" element={<Watchlist />} />
        </Routes>
    );
};

export default AppRoutes;