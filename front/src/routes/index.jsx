import { Route, Routes, Navigate } from "react-router-dom";
import Artist from "../pages/Artist";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EditArtist from "../pages/EditArtist";
import Album from "../pages/Album";
import CreateAlbum from "../pages/CreateAlbum";
import EditAlbum from "../pages/EditAlbum";
import CreateMusic from "../pages/CreateMusic";
import Song from "../pages/Song"
// import { useLogin } from '../contexts/Login';

const AppRoutes = () => {
  // const { loggedUserId } = useLogin();
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/artist" element={<Artist />} />
      <Route path="/editArtist" element={<EditArtist />} />
      <Route path="/album" element={<Album />} />
      <Route path="/createAlbum" element={<CreateAlbum />} />
      <Route path="/editAlbum" element={<EditAlbum />} />
      <Route path="/createMusic" element={<CreateMusic />} />
      <Route path="/song/album" element={<Song />} />
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />
    </Routes>
  );
};

export default AppRoutes;