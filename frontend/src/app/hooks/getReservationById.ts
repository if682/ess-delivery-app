import { useQuery } from "react-query"
import { APIClient } from "../../services/api/client"

const GetReservationById = ({ id }: { id: string }) => {

    const { data, isLoading, isError } = useQuery(["GetReservationById", id], () => getReservationByIdFromAPI(id))

    return {
        reservation: data,
        isLoading,
        isError
    }
}


const getReservationByIdFromAPI = async (id: string) => {
    const apiClient = new APIClient()

    try {
        const reservation = await apiClient.getReservationById(id)
        console.log("Mensagem:", reservation)
        return reservation
    } catch (err) {
        throw new Error("Error while getting reservation")
    }

}


export default GetReservationById