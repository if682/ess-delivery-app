import { useState, useEffect } from "react";
import "./style.css";
const EditProfileFormsSection = () => {
    const port = 4001
    const userId = localStorage.getItem("userId");
    const [name, setName] = useState("");
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const [userData, setUserData] = useState("");

    useEffect(() => {
        const handleGetUserData = async () => {
          try {
            let response = await fetch(`http://localhost:${port}/edit`, {
              method: "GET",
            });
      
            if (response.ok) {
              let data = await response.json();
              setUserData(data.user);
              console.log("GET realizado com sucesso.");
            } else {
              console.log("Ocorreu um erro no GET.");
            }
          } catch (err) {
            console.log(err);
          }
        };
    }, []);

    let handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            let res = await fetch("https://httpbin.org/post", { //Esse link de post é um dummy apy
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    username: userName,
                    email: email,
                    description: description,
                    password: userData.password,
                    birthdate: userData.birthdate,
                    phone: userData.phone,
                    location: userData.location
                }),
            });

            if(res.status === 200){
                console.log("Edit user deu certo, ok?")
                setName("");
                setUsername("");
                setEmail("");
                setDescription("");
            }else{
                alert("Ocorreu um erro no post")
            }
        }catch (err){
            console.log(err);
        }
    };

  return (
    <article>
        <form onSubmit={handleSubmit}>
            <div className="input-row">
                <input className="first-input" type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} required/>
                <input className="second-input"type="text" value={userName} placeholder="Username" onChange={(e) => setUsername(e.target.value)} required/>
            </div>
            
            <div className="input-row">
                <input className="first-input" type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                <input className="second-input" type="text" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
            </div>

            <div className="submit-button-container">
                <button className="submit-form" type="submit">Save</button>
            </div>
        </form>
    </article>
  );
}

export default EditProfileFormsSection;