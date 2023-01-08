import { useQuery } from "react-query"
import { APIClient } from "../../services/api/client"

const GetUsers = () => {

  const { data, isLoading, isError } = useQuery("getUsers", getUsersFromAPI)

  return {
    users: data,
    isLoading,
    isError
  }
}

const getUsersFromAPI = async () => {
  const apiClient = new APIClient()

  try {
    const users = await apiClient.getUsers()
    return users
  } catch(err) {
    throw new Error("Error while getting users")
  }

}

export default GetUsers