import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Quiz{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column('simple-array')
    question: string[];
}