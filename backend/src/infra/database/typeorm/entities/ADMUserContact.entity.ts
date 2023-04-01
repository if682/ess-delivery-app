import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('AdmContact')
export class ADMUserContact {
  @PrimaryColumn({
    generated: true,
  })
  id: number;

  @Column({ unique: true })
  userId: string;

  @Column()
  phone_number: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  neighborhood: string;

  @Column()
  street: string;

  @Column()
  complement: string;

  @Column()
  reference: string;
}
