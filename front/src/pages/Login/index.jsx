import { useState } from 'react';
import { useLogin } from '../../contexts/Login';

const Login = () => {
  const { handleLogin } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <button type="submit">AAAAAAAAAA</button>
      </form>
    </div>
  );
};

export default Login;