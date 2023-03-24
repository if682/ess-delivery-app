import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cardapio from './components/Cardapio';
import PrimaryButton from './components/atoms/primary-button/PrimaryButton'
import SecondaryButton from './components/atoms/secondary-button/SecondaryButton'
import CloseButtonItem from './components/atoms/close-button/CloseButtonItem'
import Sidemenu from './components/molecules/sidemenu/Sidemenu'

function App() {
  return (
    <div>
      <Sidemenu/>
    </div>
  );
}

export default App;
