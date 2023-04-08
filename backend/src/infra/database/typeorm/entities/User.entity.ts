import { Entity, Column, PrimaryColumn } from 'typeorm';

export type Role = 'USER' | 'ADMIN';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  role: Role;
}
