import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Quiz{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    questuion: string;

    @Column()
    answer: string;

    @Column()
    user: string;
}