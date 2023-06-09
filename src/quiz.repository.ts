import { Repository } from 'typeorm';
import { Quiz } from './quiz.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuizRepository {
  constructor(
    @InjectRepository(Quiz)
    private readonly repository: Repository<Quiz>,
  ) {}
}
