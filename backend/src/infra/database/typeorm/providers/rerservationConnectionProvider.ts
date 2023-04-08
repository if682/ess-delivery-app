import { DataSource } from 'typeorm';
import { ReservationConnection } from '../entities/ReservationConnection.entity';

export const ReservationConnectionProvider = [
  {
    provide: 'RESERVATION_CONNECTION_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ReservationConnection),
    inject: ['DATA_SOURCE'],
  },
];
