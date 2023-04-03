import { ReservationCreationDTO } from "../interfaces/reservation.interface";
import { Reservation } from "../typeorm/entities/Reservation.entity";

export abstract class ReservationRepository{
    abstract getReservations(): Promise<Reservation[]>
    abstract getReservationById(id:string): Promise<Reservation>
    abstract createReservation(reservation: ReservationCreationDTO): Promise<void>
}