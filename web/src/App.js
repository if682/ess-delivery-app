import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cardapio from './components/Cardapio';
import PrimaryButton from './components/atoms/primary-button/PrimaryButton'

function App() {
  var itens = [{"flamengo":"arrascaeta"}, {"flamengo":"bittencourt"}]

  return (
    <div>
      <PrimaryButton buttonContent="Clique aqui"/>
      <p>aksdhkajshdkjsdksdjh</p>
      <PrimaryButton buttonContent="Desativar"/>
      <Cardapio/>
    </div>
  );
}

export default App;
