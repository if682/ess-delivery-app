import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('favorites')
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reservationId: string;

  @Column()
  userId: string;
}
