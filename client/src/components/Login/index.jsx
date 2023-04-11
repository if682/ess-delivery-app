import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const port = 4001;

const LoginBox = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  let handleSubmit = async (e) =>{
    e.preventDefault();
    try{
        if(username === ""){
          console.log("Campo username vazio")
          alert("Campo username vazio")
        }else if(password === ""){
          console.log("Campo senha vazio")
          alert("Campo senha vazio")
        }else{
          console.log("Login bem sucedido")
        }
        let res = await fetch(`http://localhost:${port}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });
        let resJson = await res.json()
        if(res.status === 200){
            console.log("Passou ok")
            setUsername("");
            setPassword("");
            localStorage.setItem("userId", resJson.id)
            navigate(`/profile`)
        }else{
            alert("Usuário/Senha não cadastrado")
        }
    }catch (err){
        console.log(err);
    }
};

  return (
    <div class="h-screen flex flex-col justify-center items-center">
      <div class="h-48 w-48">
        <img src=".../../../assets/logo.svg" alt="Logo" class="object-cover h-48 w-48"/>
      </div>
      <div class="bg-[#77728D] w-1/4 h-3/6 rounded-lg flex flex-col justify-around items-center">

        <div className="flex flex-col items-center">
          <h1 class="text-4xl text-white font-lato my-5">
            LOGIN
          </h1>
          
          <h2 class="text-white"
          >Do not have an account? <a href="signup" class="text-[#F4A4A4]"> Sign Up</a>
          </h2>
        </div>

        <form class="w-full h-1/2 flex flex-col items-center justify-around">
          <div class="w-full h-4/6 flex flex-col items-center justify-around">
            <input data-testId = "username" value = {username} type="text" placeholder="Username" class="w-2/3 bg-none" onChange={(e) => setUsername(e.target.value)}/>
            <input data-testId = "password" value = {password} type="text" placeholder="Password" class="w-2/3 bg-none " onChange={(e) => setPassword(e.target.value)}/>
          </div>
          
          <input data-testId = "submit" type="submit" value="Sign In" class="bg-[#F4A4A4] w-1/2 h-1/5 text-white rounded-lg" onClick={handleSubmit}/>
        </form>

        <a href="login/recover" class="text-white underline underline-offset-1">Forget Password?</a>
      </div>

    </div>
  );
};

export default LoginBox;