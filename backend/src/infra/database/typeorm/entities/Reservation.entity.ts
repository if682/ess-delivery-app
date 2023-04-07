import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reservation')
export class Reservation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  streetNumber: number;

  @Column({ unique: true })
  cep: string;

  @Column()
  checkIn: string;

  @Column()
  checkOut: string;

  @Column()
  guests: number;

  @Column({ type: 'float' })
  budget: number;

  @Column({ nullable: true })
  additionalInfo: string;

  @Column()
  bedrooms: number;

  @Column()
  beds: number;

  @Column()
  bathrooms: number;

  @Column({ type: 'jsonb' })
  photos: Array<File>;

  @Column()
  owner: string;
}
