import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cardapio from './components/Cardapio';

function App() {
  var itens = [{"flamengo":"arrascaeta"}, {"flamengo":"bittencourt"}]

  return (
    <Cardapio/>
  );
}

export default App;
