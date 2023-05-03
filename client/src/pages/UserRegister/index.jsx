import { useState } from "react";
import { useNavigate } from "react-router-dom";

const port = 4001;

const UserRegister = () => {

    const [firstName, setFirstName] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");
    const [dateOfBirth, setdateOfBirth] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");

    const navigate = useNavigate();

    let handleSubmit = async (e) => {
        e.preventDefault();
        const date = new Date(dateOfBirth);
        const iso = date.toISOString();
        try {
            if (firstName === "") {
                console.log("Campo nome vazio");
                alert("Campo nome vazio")
            } else if (password === "") {
                console.log("Campo senha vazio")
                alert("Campo senha vazio")
            } else if (username === "") {
                console.log("Campo username vazio");
                alert("Campo username vazio")
            } else if (email === "") {
                console.log("Campo email vazio");
                alert("Campo email vazio")
            }else if(dateOfBirth === ""){
                console.log("Campo data de nascimento vazio");
                alert("Campo data de nascimento vazio")
            }else if(phone === ""){
                console.log("Campo data de phone vazio");
                alert("Campo data de phone vazio")
            }else if(location === ""){
                console.log("Campo location vazio");
                alert("Campo location vazio")
            } else {
                console.log("Registro completo")
            }
            let res = await fetch(`http://localhost:${port}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: firstName,
                    username: username,
                    email: email,
                    description: "O usuário ainda não possui descrição cadastrada",
                    password: password,
                    birthdate: iso,
                    phone: phone,
                    location: location
                }),
            });
            //let resJson = await res.json()
            if (res.status === 201) {
                console.log("Passou ok")
                setFirstName("");
                setPassword("");
                setEmail("");
                setdateOfBirth("");
                setLocation("");
                setPhone("");
                setUserName("");
                navigate(`/`)
            } else {
                alert("Ocorreu um erro no post")
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <div class="w-full flex justify-end">
                <a href="login" class="h-8 w-8 mt-4 mr-4">
                    <img src=".../../../assets/x-icon.png" alt="Return" class="" />
                </a>
            </div>
            <div class="my-20 flex flex-col items-center">
                <div>
                    <button class="h-36 w-36">
                        <img src=".../../../assets/user-placeholder.png" alt="Profile Placeholder" class="" />
                    </button>
                </div>
                <div class="my-6 w-3/4 h-1 bg-[#F4A4A4]"></div>
                <div class="w-3/4">
                    <form class="flex flex-col">
                        <div class="flex justify-between my-2">
                            <input data-testId="name" value={firstName} type="text" placeholder="Name*" class="w-2/3 bg-none" onChange={(e) => setFirstName(e.target.value)} required />
                            <input required data-testId="password" value={password} type="text" placeholder="Password*" class="w-2/3 bg-none" onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div class="flex justify-between my-2">
                            <input required data-testId="username" value={username} type="text" placeholder="Username*" class="w-2/3 bg-none" onChange={(e) => setUserName(e.target.value)} />
                            <input required data-testId="email" value={email} type="text" placeholder="Email*" class="w-2/3 bg-none" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div value={dateOfBirth} class="my-2 w-auto flex justify-between">
                            <input required data-testId="birthday" type="date" class="
                        p-4 pr-[40px] bg-[#D9D9D9] text-[#77728D] mx-8
                        rounded-[10px] h-[50px] w-[512px]
                        " onChange={(e) => setdateOfBirth(e.target.value)} />
                            <input required data-testId="phone" value={phone} type="phone" placeholder="Phone" class="
                        p-4 pr-[40px] bg-[#D9D9D9] text-[#77728D] mx-8
                        rounded-[10px] h-[50px] w-[512px]
                        " onChange={(e) => setPhone(e.target.value)} />
                        </div>

                        <input required data-testId="location" value={location} type="text" placeholder="Location" class="w-auto my-2 bg-none" onChange={(e) => setLocation(e.target.value)} />

                        <div class="flex justify-center">
                            <input required data-testId="submit" type="submit" value="Register" className="my-2 w-[217px] h-[47px] bg-[#F4A4A4] text-white" onClick={handleSubmit} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserRegister