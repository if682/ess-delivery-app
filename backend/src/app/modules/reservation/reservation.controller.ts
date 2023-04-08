import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import UserContactRepository from 'src/infra/database/repositories/ADMUserContactRepository';
import { ReservationService } from './reservation.service';
import {
  AcceptReservationDTO,
  MakeReservationDTO,
  ReservationCreationDTO,
} from 'src/infra/database/interfaces/reservation.interface';
import { ReservationRepository } from 'src/infra/database/repositories/ReservationRepository';
import { ReservationConnectionRepository } from 'src/infra/database/repositories/ReservationConnectionRepository';

@Controller('reservation')
export class ReservationController {
  constructor(
    private reservationRepository: ReservationRepository,
    private reservationService: ReservationService,
    private reservationConnectionRepository: ReservationConnectionRepository,
  ) {}

  @Get()
  async getReservations() {
    const reservation = await this.reservationRepository.getReservations();
    return reservation.map(this.reservationService.getReservationResponse);
  }

  @Get(':Id')
  async getReservationById(@Param('Id') Id: string) {
    const reservation = await this.reservationRepository.getReservationById(Id);
    return this.reservationService.getReservationResponse(reservation);
  }

  @Get('cep/:cep')
  async getReservationByCEP(@Param('cep') cep: string) {
    const reservation = await this.reservationRepository.getReservationByCEP(
      cep,
    );
    return this.reservationService.getReservationResponse(reservation);
  }

  @Post()
  async createReservation(
    @Body() createReservationDTO: ReservationCreationDTO,
  ) {
    return this.reservationRepository.createReservation(createReservationDTO);
  }

  @Post('/make')
  async makeUserReservation(@Body() makeReservation: MakeReservationDTO) {
    this.reservationConnectionRepository.createReservationConnection(
      makeReservation,
    );

    //TODO colocar aqui também a chamada pro serviço de email
  }

  @Patch('/accept')
  async acceptReservation(@Body() acceptReservation: AcceptReservationDTO) {
    await this.reservationConnectionRepository.updateReservation(
      acceptReservation.id,
      acceptReservation.accepted,
    );
  }

  @Get('/created/:id')
  async getCreatedReservations(@Param('id') id: string) {
    return this.reservationRepository.getReservationsByOwnerId(id);
  }

  @Get('/user/:id')
  async getAllUserReservation(@Param('id') id: string) {
    const reservationConnection =
      await this.reservationConnectionRepository.getAllReservationByUserId(id);

    const reservationsIds = reservationConnection.map((e) => e.reservationId);
    const reservations = await this.reservationRepository.getReservationByList(
      reservationsIds,
    );

    return reservations.map((e, index) => {
      return {
        ...e,
        accepted: reservationConnection[index].accepted,
        connectionId: reservationConnection[index].id,
        createdAd: reservationConnection[index].createdAt,
      };
    });
  }
}
