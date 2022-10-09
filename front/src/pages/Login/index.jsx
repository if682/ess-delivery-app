import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useLogin } from '../../contexts/Login';
import Input from '../../components/Input'
import Button from '../../components/Button'
import logo from '../../assets/Logo.png'

import './styles.css'
import { Link } from 'react-router-dom';

const Login = () => {
  const { handleLogin, loggedUserId } = useLogin();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };
  useEffect(() => {
    if (!!loggedUserId) navigate("/artist");
  }, [loggedUserId, navigate]);

  return (
    <div className='Container'>
      <section className="Gradient">
        <img src={logo} alt="Logo" />
        <div className="box">
          <p>Se Cadastre como artista e tenha a oportunidade de ter suas músicas ouvidas por todos os usuários do Esspotify</p>
          <ul>
            <li>+200 mil ouvintes mensais</li>
            <li>Mantenha 100% de propriedade da sua música</li>
            <li>Sem taxa anual para distribuição ilimitada para redes sociais como TikTok, Instagram, YouTube e muito mais</li>
            <li>Mantenha 100% da receita das Plataformas Digitais</li>
          </ul>
        </div>
      </section>
      <main className="LoginContainer">
        <form onSubmit={onSubmit} className='FormContainer'>
          <p className="Title">Login</p>
          <p className="subtitle">
            {"Não é cadastrado? "}
            <Link className='Link' to='/register'>Faça o cadastro</Link>
          </p>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            placeholder="Email"
          >
            Email
          </Input>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          >
            Senha
          </Input>
          <Button type="submit">Entrar</Button>
        </form>
      </main>
    </div>
  );
};

export default Login;