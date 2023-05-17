import { Repository } from 'typeorm';
import { Quiz } from './quiz.entity';

export class QuizRepository {
    constructor(private readonly repository: Repository<Quiz>) {}
}