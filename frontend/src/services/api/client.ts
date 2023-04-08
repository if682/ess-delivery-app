
import axios, { AxiosInstance } from 'axios'
import { ReservationResponse, UserResponse } from './interfaces'
import { APIConfig } from '../../configs/api/api.config'
import { RegisterADMInterface } from '../../app/pages/AdmRegister'
import { FormValues } from './interfaces'


export class APIClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: APIConfig.url,
    });
  }

  async sendFormRegister(data: any) {
    const response = await this.axiosClient.post("/user", data);
    console.log(response);
    return response.data;
  }

  async sendFormLogin(data: any) {
    const response = await this.axiosClient.post("/login", data);
    console.log(response);
    return response.data;
  }

  async getUsers() {
    const response = await this.axiosClient.get<UserResponse[]>("/user");
    return response.data;
  }

  async getUserById(userId: string) {
    const response = await this.axiosClient.get<UserResponse>(
      `/user/${userId}`
    );
    return response.data;
  }

  async createAdmUser(userData: RegisterADMInterface) {
    await this.axiosClient.post("/user/admin", userData);
    return true;
  }

  async createReservation(reservation: FormValues) {
    const response = await this.axiosClient.post<FormValues>('/reservation', reservation)
    return response.data
  }

  async getReservations() {
    const response = await this.axiosClient.get<ReservationResponse[]>('/reservation');
    return response.data
  }

  async getReservationById(ReservationID: string) {
    const response = await this.axiosClient.get<ReservationResponse>(`/reservation/${ReservationID}`)
    return response.data
  }

  async getReservationByCEP(ReservationCEP: string) {
    const response = await this.axiosClient.get<ReservationResponse>(`/reservation/cep/${ReservationCEP}`)
    return response.data
  }

}
