import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export type UserRole = "branco" | "negro" | "pardo";

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @Column()
  idade: number;

  @Column()
  peso: number;

  @Column({
    type: "enum",
    enum: ['branco', 'negro', 'pardo'],
    default: "branco"
  })
  etnia: UserRole;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
