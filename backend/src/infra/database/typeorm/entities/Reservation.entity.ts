import { Entity, Column, PrimaryColumn } from 'typeorm';

type Role = 'USER' | 'ADMIN';

@Entity('Reservation')
export class Reservation {
  @PrimaryColumn({ generated : true})
  id: string;

  @Column({ unique: true })
  location: string;

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
}

