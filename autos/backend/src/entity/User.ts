import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { Car } from './Car';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    idnumber: string;

    @Column()
    phonenumber: string;

    @OneToMany(type => Car, car => car.rentedby)
    cars: Car[];

}