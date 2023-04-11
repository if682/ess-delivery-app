import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes";
import { MovieContext } from "../Context/MovieContext";
import {LoginContext } from "../Context/LoginContext";
import { useState } from "react";


function App() {
  const [title, setTitle] = useState({title: "ola mundo", description: "ola mundo", posterPath: "imageLink", releaseDate: "ola mundo", id: 0, duration: "ola mundo"})
  const [userId, setUserId] = useState({userId: ""})
  return (
    <LoginContext.Provider value={[userId, setUserId]}>
       <MovieContext.Provider value={[title, setTitle]}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </MovieContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
