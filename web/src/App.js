import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cardapio from './components/Cardapio';
import PrimaryButton from './components/atoms/primary-button/PrimaryButton'
import SecondaryButton from './components/atoms/secondary-button/SecondaryButton'
import CloseButtonItem from './components/atoms/close-button/CloseButtonItem'
import Sidemenu from './components/atoms/sidemenu/Sidemenu'

function App() {
  var itens = [{"flamengo":"arrascaeta"}, {"flamengo":"bittencourt"}]

  return (
    <div>
      <PrimaryButton buttonContent="Clique aqui"/>
      <SecondaryButton buttonContent="Desativar"/>
      <Cardapio/>
      <CloseButtonItem/>
      <Sidemenu/>
      <p>aaaaaaaaaaaaa</p>
    </div>
  );
}

export default App;
