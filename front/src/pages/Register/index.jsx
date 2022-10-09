import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import LandingInfo from '../../components/LandingInfo';
import "./styles.css"
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const Register = () => {
  return(
    <div className='Container'>
      <LandingInfo />
      <main className="LoginContainer">
        <form className='FormContainer'>
          <p className='Title'>Cadastro</p>
          <p className='subtitle'>
            {"Já está cadastrado? "}
            <Link className='Link' to='/login'>Faça o login</Link>
          </p>
          <Input
            children={"Nome"}
            placeholder="Nome"
          />
          <Input
            children={"Email"}
            placeholder="Email"
          />
          <Input
            children={"País"}
            placeholder="País"
          />
          <Input
            children={"Gênero musical"}
            placeholder="Gênero musical"
          />
          <Input
            children={"Senha"}
            placeholder="Senha"
          />
          <Checkbox>
            Concordo com os termos e condições do  Esspotify
          </Checkbox>
          <Button type="submit">Cadastrar</Button>
        </form>
      </main>
    </div>
  );
};

export default Register;