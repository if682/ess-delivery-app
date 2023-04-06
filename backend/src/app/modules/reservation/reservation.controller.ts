import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import UserContactRepository from 'src/infra/database/repositories/ADMUserContactRepository';
import { ReservationService } from './reservation.service';
import { ReservationCreationDTO } from 'src/infra/database/interfaces/reservation.interface';
import { ReservationRepository } from 'src/infra/database/repositories/ReservationRepository';

@Controller('Reservation')
export class ReservationController {
  constructor(
    private reservationRepository: ReservationRepository,
    private reservationService: ReservationService,
  ) {}

  @Get()
  async getReservations() {
    const  reservation = await this.reservationRepository.getReservations();
    return reservation.map(this.reservationService.getReservationResponse);
  }

  @Get(':Id')
  async getReservationById(@Param('Id') Id: string) {
    const reservation = await this.reservationRepository.getReservationById(Id);
    return this.reservationService.getReservationResponse(reservation);
  }

  @Get('cep/:cep')
  async getReservationByCEP(@Param('cep') cep: string) {
    const reservation = await this.reservationRepository.getReservationByCEP(cep);
    return this.reservationService.getReservationResponse(reservation);
  }

  @Post()
  async createReservation(@Body() createReservationDTO: ReservationCreationDTO) {
    return this.reservationRepository.createReservation(createReservationDTO);
  }

}
