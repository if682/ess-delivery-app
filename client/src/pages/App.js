import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes";
import { MovieContext } from "../Context/MovieContext";
import { useState } from "react";


function App() {
  const [title, setTitle] = useState({title: "ola mundo", description: "ola mundo", posterPath: "imageLink", releaseDate: "ola mundo", id: 0, duration: "ola mundo"})
  return (
    <MovieContext.Provider value={[title, setTitle]}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MovieContext.Provider>
  );
}

export default App;
