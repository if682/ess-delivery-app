import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { RestaurantMenu } from './components/restaurantMenu/RestaurantMenu';
import { Login } from './components/login/Login';
import {
  BrowserRouter,
  Routes,
  Route,

} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/restaurantMenu' element={<RestaurantMenu />}></Route>
      </Routes>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
