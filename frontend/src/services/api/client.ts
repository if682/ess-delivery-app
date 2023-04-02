import axios, { AxiosInstance } from 'axios'
import { UserResponse } from './interfaces'
import { APIConfig } from '../../configs/api/api.config'
import { RegisterADMInterface } from '../../app/pages/AdmRegister'

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

  async createAdmUser(userData: RegisterADMInterface) {
    await this.axiosClient.post('/user/admin', userData)
    return true
  }
}