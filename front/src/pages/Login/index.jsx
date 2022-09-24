import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useLogin } from '../../contexts/Login';

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
    <div>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">AAAAAAAAAA</button>
      </form>
    </div>
  );
};

export default Login;