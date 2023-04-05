import { useState } from "react";
import "./style.css";
const EditProfileFormsSection = () => {
  
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setdateOfBirth] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    let handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            let res = await fetch("https://httpbin.org/post", { //Esse link de post é um dummy apy
                method: "POST",
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    dateOfBirth: dateOfBirth,
                    email: email,
                    description: description,
                }),
            });

            let resJson = await res.json()
            if(res.status === 200){
                setFirstName("");
                setLastName("");
                setEmail("");
                setdateOfBirth("");
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
                <input className="first-input" type="text" value={firstName} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required/>
                <input className="second-input"type="text" value={lastName} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required/>
            </div>
            
            <div className="input-row">
                <input className="first-input" type="text" value={dateOfBirth} placeholder="Date of birth" onChange={(e) => setdateOfBirth(e.target.value)} required/>
                <input className="second-input" type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
            </div>

            <div className="input-row">
                <input className="description-input" type="text" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
            </div>

            <div className="submit-button-container">
                <button className="submit-form" type="submit">Save</button>
            </div>
        </form>
    </article>
  );
}

export default EditProfileFormsSection;