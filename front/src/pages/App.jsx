import { BrowserRouter, Route, Routes } from "react-router-dom";
import Artist from "../Artist/artist";
import Login from "../Login/login";
import Register from "../Register/register";
import EditArtist from "../EditArtist/editArtist";
import Album from "../Album/album";
import CreateAlbum from "../CreateAlbum/createAlbum";
import EditAlbum from "../EditAlbum/editAlbum";
import CreateMusic from "../CreateMusic/createMusic";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/register" element={<Register />} />   
                <Route path="/login" element={<Login />} />
                <Route path="/artist" element={<Artist />} />
                <Route path="/editArtist" element={<EditArtist />} />
                <Route path="/album" element = {<Album/>}/>
                <Route path="/createAlbum" element = {<CreateAlbum/>}/>
                <Route path="/editAlbum" element = {<EditAlbum/>}/>
                <Route path="/createMusic" element = {<CreateMusic/>}/>
              </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
