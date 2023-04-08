import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes";

window.selectedMovieTitle = ""
window.selectedMovieId = 0
window.selectedMovieReleaseDate = ""
window.selectedMovieDescription = ""

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
