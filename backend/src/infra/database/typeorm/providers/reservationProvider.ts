import { DataSource } from 'typeorm';
import { Reservation } from '../entities/Reservation.entity';

export const ReservationProviders = [
  {
    provide: 'RESERVATION_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Reservation),
    inject: ['DATA_SOURCE'],
  },
];