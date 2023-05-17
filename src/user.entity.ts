import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Quiz } from './quiz.entity';

@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @OneToMany(() => Quiz, (quiz) => quiz.user)
  quizzes: Quiz[]
}