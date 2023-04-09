import { useQuery } from "react-query"
import { APIClient } from "../../services/api/client"

const GetUserIdByToken = ({ token }: { token: string }) => {

    const { data, isLoading, isError } = useQuery(["GetUserIdByToken", token], () => getUserIdByTokenFromAPI(token))

    return {
        userId: data,
        isLoading,
        isError
    }
}


const getUserIdByTokenFromAPI = async (token: string) => {
    const apiClient = new APIClient()

    try {
        const userId = await apiClient.getIdByToken(token);
        return userId
    } catch (err) {
        throw new Error("Error while getting reservation")
    }

}


export default GetUserIdByToken