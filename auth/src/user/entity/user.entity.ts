import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @Column({ type: 'varchar', length: 20 })
    username: string;

    @Column({ type: 'varchar', length: 20 })
    password: string;

    @PrimaryGeneratedColumn()
    id: number;
}