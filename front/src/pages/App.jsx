import { BrowserRouter, Route, Routes } from "react-router-dom";
import Artist from "./Artist";
import Login from "./Login";
import Register from "./Register";
import EditArtist from "./EditArtist";
import Album from "./Album";
import CreateAlbum from "./CreateAlbum";
import EditAlbum from "./EditAlbum";
import CreateMusic from "./CreateMusic";
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
