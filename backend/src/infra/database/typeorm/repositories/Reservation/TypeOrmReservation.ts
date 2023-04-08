import { Injectable, Inject } from '@nestjs/common';
import { EntityManager, In, Repository } from 'typeorm';
import { Reservation } from '../../entities/Reservation.entity';
import { ReservationCreationDTO } from 'src/infra/database/interfaces/reservation.interface';
import { ReservationRepository } from 'src/infra/database/repositories/ReservationRepository';
import { ReservationConnection } from '../../entities/ReservationConnection.entity';
import { postgreDatasource } from '../../datasource';

@Injectable()
export class TypeOrmReservationRepository implements ReservationRepository {
  constructor(
    @Inject('RESERVATION_REPOSITORY')
    private reservationRepository: Repository<Reservation>,
    @Inject('RESERVATION_CONNECTION_REPOSITORY')
    private reservationConnectionRepository: Repository<ReservationConnection>,
  ) {}

  getReservations(): Promise<Reservation[]> {
    return this.reservationRepository.find();
  }

  getReservationByCEP(cep: string): Promise<Reservation> {
    return this.reservationRepository.findOne({
      where: {
        cep,
      },
    });
  }

  getReservationById(id: string): Promise<Reservation> {
    return this.reservationRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createReservation({
    name,
    city,
    street,
    streetNumber,
    cep,
    checkIn,
    checkOut,
    guests,
    budget,
    additionalInfo,
    bedrooms,
    beds,
    bathrooms,
    photos,
    owner,
  }: ReservationCreationDTO): Promise<void> {
    const newReservation = new Reservation();

    Object.assign(newReservation, {
      name,
      city,
      street,
      streetNumber,
      cep,
      checkIn,
      checkOut,
      guests,
      budget,
      additionalInfo,
      bedrooms,
      beds,
      bathrooms,
      photos,
      owner,
    });

    await this.reservationRepository.save(newReservation);
  }

  async getReservationByList(list: string[]): Promise<Reservation[]> {
    const reservations = [];
    for (const id of list) {
      const reservation = await this.reservationRepository.findOne({
        where: {
          id,
        },
      });
      reservations.push(reservation);
    }

    const test = await this.reservationRepository.find();
    console.log(test);
    return reservations;
  }

  async getReservationsByOwnerId(id: string): Promise<Reservation[]> {
    return this.reservationRepository.find({
      where: {
        owner: id,
      },
    });
  }

  async deleteReservation(id: string): Promise<void> {
    const manager = new EntityManager(postgreDatasource);

    const connections = await this.reservationConnectionRepository.find({
      where: {
        reservationId: id,
      },
    });

    await manager.remove(connections);

    const reservation = await this.reservationRepository.findOne({
      where: {
        id,
      },
    });

    await manager.remove(reservation);
  }
}
