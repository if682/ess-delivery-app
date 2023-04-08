import { useQuery } from "react-query"
import { APIClient } from "../../services/api/client"

const GetReservations = () => {

    const { data, isLoading, isError } = useQuery("GetReservations", getReservationsFromAPI)

    return {
        reservations: data,
        isLoading,
        isError
    }
}

const getReservationsFromAPI = async () => {
    const apiClient = new APIClient()

    try {
        const reservations = await apiClient.getReservations()
        return reservations
    } catch (err) {
        throw new Error("Error while getting users")
    }

}

export default GetReservations