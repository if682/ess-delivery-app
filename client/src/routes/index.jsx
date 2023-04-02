import { Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="profile" element={<Profile />} />
        </Routes>
    );
};

export default AppRoutes;