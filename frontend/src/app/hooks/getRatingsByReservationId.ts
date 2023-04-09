import { useQuery } from "react-query"
import { APIClient } from "../../services/api/client"

const GetRatingsByReservationId = ({ id }: { id: string }) => {

    const { data, isLoading, isError } = useQuery(["GetRatingsByReservationId", id], () => getRatingsByReservationIdFromAPI(id))

    return {
        ratings: data,
        isLoading,
        isError
    }
}


const getRatingsByReservationIdFromAPI = async (id: string) => {
    const apiClient = new APIClient()

    try {
        const ratings = await apiClient.getRatingsByReservationId(id)
        return ratings
    } catch (err) {
        throw new Error("Error while getting reservation")
    }

}


export default GetRatingsByReservationId