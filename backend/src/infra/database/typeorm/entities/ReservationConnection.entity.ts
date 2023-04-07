import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reservation_connection')
export class ReservationConnection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  reservationId: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
