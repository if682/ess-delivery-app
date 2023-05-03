import LoginBox from "../../components/Login";

const Login = () => {
  const wrongPassword = false;
  const noPassword = false;
  const usernameNotFound = false;
  const toMuchTries = false;

  function wrongPasswordAlert(){

  }

  return (
    <>
      <LoginBox></LoginBox>
    </>
  );
}

export default Login;