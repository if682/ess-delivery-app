import { Injectable, Inject } from '@nestjs/common';
import { Not, Repository } from 'typeorm';
import { ReservationConnectionRepository } from 'src/infra/database/repositories/ReservationConnectionRepository';
import { ReservationConnectionCreationDTO } from 'src/infra/database/interfaces/reservationConnection.interface';
import { ReservationConnection } from '../../entities/ReservationConnection.entity';

@Injectable()
export class TypeOrmReservationConnectionRepository
  implements ReservationConnectionRepository
{
  constructor(
    @Inject('RESERVATION_CONNECTION_REPOSITORY')
    private reservationConnectionRepository: Repository<ReservationConnection>,
  ) {}

  getConnectionByReservationId(id: string): Promise<ReservationConnection> {
    return this.reservationConnectionRepository.findOne({
      where: {
        reservationId: id,
      },
    });
  }

  getConnectionByUserId(id: string): Promise<ReservationConnection> {
    return this.reservationConnectionRepository.findOne({
      where: {
        userId: id,
      },
    });
  }

  getAllReservationByUserId(id: string): Promise<ReservationConnection[]> {
    return this.reservationConnectionRepository.find({
      where: {
        userId: id,
        accepted: Not('negado'),
      },
    });
  }
  async createReservationConnection(
    reservationConnection: ReservationConnectionCreationDTO,
  ): Promise<void> {
    const newReservationConnection = new ReservationConnection();

    Object.assign(newReservationConnection, reservationConnection);

    await this.reservationConnectionRepository.save(newReservationConnection);
  }

  async getConnectionById(id: number): Promise<ReservationConnection> {
    return this.reservationConnectionRepository.findOne({
      where: {
        id,
      },
    });
  }

  async updateReservation(id: number, accepted: boolean): Promise<void> {
    const reservationConnection =
      await this.reservationConnectionRepository.findOne({
        where: {
          id,
        },
      });

    reservationConnection.accepted = accepted ? 'aceito' : 'negado';

    await this.reservationConnectionRepository.save(reservationConnection);
  }
}
