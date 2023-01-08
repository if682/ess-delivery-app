import axios, { AxiosInstance } from 'axios'
import { UserResponse } from './interfaces'
import { APIConfig } from '../../configs/api/api.config'

export class APIClient {

  private axiosClient: AxiosInstance

  constructor () {
    this.axiosClient = axios.create({
      baseURL: APIConfig.url
    })
  }

  async getUsers() {
    const response = await this.axiosClient.get<UserResponse[]>('/user')
    return response.data
  }

  async getUserById(userId: string) {
    const response = await this.axiosClient.get<UserResponse>(`/user/${userId}`)
    return response.data
  }
}