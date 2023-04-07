import { ReservationConnectionCreationDTO } from '../interfaces/reservationConnection.interface';
import { ReservationConnection } from '../typeorm/entities/ReservationConnection.entity';

export abstract class ReservationConnectionRepository {
  abstract getConnectionById(id: number): Promise<ReservationConnection>;
  abstract getConnectionByReservationId(
    id: string,
  ): Promise<ReservationConnection>;
  abstract getConnectionByUserId(id: string): Promise<ReservationConnection>;
  abstract getAllReservationByUserId(
    id: string,
  ): Promise<ReservationConnection[]>;
  abstract createReservationConnection(
    reservationConnection: ReservationConnectionCreationDTO,
  ): Promise<void>;
  abstract updateReservation(id: number, accepted: boolean): Promise<void>;
}
