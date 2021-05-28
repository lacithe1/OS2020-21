import { Column, Entity, JoinTable,  ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { State } from './State';
import { User } from './User';

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, type: 'text' })
    type: string;

    @Column({ nullable: true, type: 'text' })
    manufacturer: string;

    @Column({ nullable: true })
    imgUrl: string;

    @Column({ nullable: true })
    license: string;

    @Column({ type: 'float' })
    rfee: number;
    
    @Column({ type: 'float' })
    kmfee: number;

    @ManyToOne(type => User, user=>user.cars,{
        eager: true,
        cascade: true
    })
    rentedby: User;

    @ManyToOne(type =>State,{
        eager: true,
        cascade: true
    })
    @JoinTable()
    states: State;
}