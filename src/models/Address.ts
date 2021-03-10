import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('address')
  class Address {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    endereco: string;
  
    @Column()
    numero: number;
  
    @Column()
    complemento: string;
  
    @Column()
    cep: number;
  
    @Column()
    cidade: string;
  
    @Column()
    estado: string;

    @Column()
    user_id: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Address;
  