import React, { useState, useEffect } from "react";
import { InputFieldText } from "./loginComponents/inputBox/Input";
import { RedButtonLogin } from "./loginComponents/loginButton/RedButton";
import { WhiteButtonLogin } from "./loginComponents/whiteButton/WhiteButton";

export const Login = () => {
    const [input, setInput] = useState("")

    return (
        <div className="App">

            <InputFieldText set_val={setInput} placeholder={'Insira algo'}></InputFieldText>
            <RedButtonLogin buttonText={'Entrar'}></RedButtonLogin>
            <WhiteButtonLogin buttonText={'Entrar'}></WhiteButtonLogin>
            <p>{input}</p>
        </div>
    );
}
