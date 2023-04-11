import { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const EditProfileFormsSection = () => {
    const port = 4001
    const navigate = useNavigate()
    const userId = localStorage.getItem("userId");
    const [name, setName] = useState("");
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const [userData, setUserData] = useState("");

    useEffect(() => {
        const handleGetUserData = async () => {
          try {
            let response = await fetch(`http://localhost:${port}/profile/${userId}`, {
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

        handleGetUserData();
    }, []);

    let handleSubmit = async (e) =>{
        if(name === ""){
          console.log("Campo nome vazio");
        }else if(userName === ""){
          console.log("Campo username vazio");
        }else if(email === ""){
          console.log("Campo email vazio");
        }else if(description === ""){
          console.log("Campo descrição vazio");
        }else{
          console.log("Edit profile foi enviado")
        }
        e.preventDefault();
        try{
            let res = await fetch(`http://localhost:${port}/edit`, { //Esse link de post é um dummy apy
                method: "PUT",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    username: userName,
                    email: email,
                    description: description,
                    birthdate: userData.birthdate,
                    phone: userData.phone,
                    location: userData.location
                }),
            });
            if(res.status === 200){
                console.log("Edit user deu certo, ok?")
                navigate('/profile')
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
                <input data-testId = "name" className="first-input" type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} required/>
                <input data-testId = "username" className="second-input"type="text" value={userName} placeholder="Username" onChange={(e) => setUsername(e.target.value)} required/>
            </div>
            
            <div className="input-row">
                <input data-testId = "email" className="first-input" type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                <input data-testId = "description" className="second-input" type="text" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
            </div>

            <div className="submit-button-container">
                <button  data-testId = "submit" className="submit-form" type="submit">Save</button>
            </div>
        </form>
    </article>
  );
}

export default EditProfileFormsSection;