import { useLogin } from '../../contexts/Login';

const Artist = () => {
    const { userData } = useLogin();
    return (
        <div>
            {userData?.name ?? "Carregando!"}
        </div>
    );
};

export default Artist;