import { BrowserRouter, Route, Routes } from "react-router-dom";
import Artist from "../artist";
import Login from "../login";
import SignIn from "../signIn";
import EditArtist from "../editArtist";
import Album from "../album";
import CreateAlbum from "../createAlbum";
import EditAlbum from "../editAlbum";
import CreateMusic from "../createMusic";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/signIn" element={<SignIn />} />   
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
