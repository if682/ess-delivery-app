import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('evaluation')
export class Evaluation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  text: string;

  @Column()
  star: number;

  @Column()
  reservationId: string;

  @Column()
  userId: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;
}
