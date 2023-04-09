import { FilterParams } from 'src/app/modules/reservation/reservation.controller';
import { ReservationCreationDTO } from '../interfaces/reservation.interface';
import { Reservation } from '../typeorm/entities/Reservation.entity';
import { Evaluation } from '../typeorm/entities/Evaluation.entity';

export interface CompletedReservation extends Reservation {
  evaluations: Evaluation[];
}

export abstract class ReservationRepository {
  abstract getReservations(): Promise<Reservation[]>;
  abstract getReservationById(id: string): Promise<Reservation>;
  abstract getReservationByCEP(cep: string): Promise<Reservation>;
  abstract createReservation(
    reservation: ReservationCreationDTO,
  ): Promise<void>;
  abstract getReservationByList(list: string[]): Promise<Reservation[]>;
  abstract getReservationsByOwnerId(id: string): Promise<Reservation[]>;
  abstract deleteReservation(id: string): Promise<void>;
  abstract getWithParams(filters: FilterParams): Promise<Reservation[]>;
  abstract getCompletedEvaluationByUserId(
    id: string,
  ): Promise<CompletedReservation[]>;
  abstract getAllSolicitationsOfReservations(): Promise<any[]>;
}
