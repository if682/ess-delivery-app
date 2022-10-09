import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import LandingInfo from '../../components/LandingInfo';
import "./styles.css"
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { useState } from 'react';
import {api} from '../../services/api'


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [genre, setGenre] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {name, email,country, genre, password};
    if(!agreeTerms) {
      alert("Aceite os termos")
      return
    }
    try {
      await api.post("/artists",body)
      alert("Cadastrado com sucesso")
      navigate("/login")
    } catch (error) {
      alert("Deu ruim ein")
    }
  }

  return(
    <div className='Container'>
      <LandingInfo />
      <main className="LoginContainer">
        <form className='FormContainer' onSubmit={handleSubmit}>
          <p className='Title'>Cadastro</p>
          <p className='subtitle'>
            {"Já está cadastrado? "}
            <Link className='Link' to='/login'>Faça o login</Link>
          </p>
          <Input
            children={"Nome"}
            placeholder="Nome"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            children={"Email"}
            placeholder="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            children={"País"}
            placeholder="País"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          <Input
            children={"Gênero musical"}
            placeholder="Gênero musical"
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
          <Input
            children={"Senha"}
            placeholder="Senha"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Checkbox
            checked={agreeTerms}
            onClick={() => setAgreeTerms(p => !p)}
            required
          >
            Concordo com os termos e condições do  Esspotify
          </Checkbox>
          <Button type="submit">Cadastrar</Button>
        </form>
      </main>
    </div>
  );
};

export default Register;