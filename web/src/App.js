import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import { RestaurantMenu } from './components/restaurantMenu/RestaurantMenu';
import { GetClientName } from './components/RegisterClient/loginComponents/GetClientName';
import { GetClientEmail } from './components/RegisterClient/loginComponents/GetClientEmail';
import { ConfirmEmail } from './components/RegisterClient/loginComponents/ConfirmEmail';
import { GetClientPassword } from './components/RegisterClient/loginComponents/GetClientPassword';
import { ClientRegistered } from './components/RegisterClient/loginComponents/ClientRegistered';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/MenuRestaurante' element={<RestaurantMenu/>}/>
        <Route path='/CadastroNome' element={<GetClientName/>}/>
        <Route path='/CadastroEmail' element={<GetClientEmail/>}/>
        <Route path='/ConfirmacaoEmail' element={<ConfirmEmail/>}/>
        <Route path='/CadastroSenha' element={<GetClientPassword/>}/>
        <Route path='/Cadastrado' element={<ClientRegistered/>}/>
      </Routes>
    </Router>
  );
}

export default App;
