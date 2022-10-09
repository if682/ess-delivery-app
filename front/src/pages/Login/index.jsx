import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useLogin } from '../../contexts/Login';
import Input from '../../components/Input'
import Button from '../../components/Button'

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
      <section className="Gradient"></section>
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