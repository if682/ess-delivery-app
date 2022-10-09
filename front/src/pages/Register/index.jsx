import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";

const Register = () => {
    return(
        <div>
            <div>
                <p>Cadastro</p>
                <p>Já está cadastrado? Faça o login</p>
            </div>
            <Input children = {"Nome"}></Input>
            <Input children = {"Email"}></Input>
            <Input children = {"País"}></Input>
            <Input children = {"Senha"}></Input>
            <Checkbox></Checkbox>
        </div>
    );
};

export default Register;