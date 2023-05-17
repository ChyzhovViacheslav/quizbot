import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Quiz{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.quizzes)
    user: User;

    @Column({nullable: true})
    answer1: string;

    @Column({nullable: true})
    answer2: string;

    @Column({nullable: true})
    answer3: string;

    @Column({nullable: true})
    answer4: string;
}