import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from './quiz.entity';
import { User } from './user.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async createQuiz(userId: number): Promise<void> {
    const user = new User();
    user.id = userId;
    const quiz = new Quiz();
    quiz.user = user
    await this.userRepository.save(user)
    await this.quizRepository.save(quiz)
  }

  async getQuestion(questionIndex: number): Promise<string> {
    const questions = [
      'How old are you',
      'Favorite car',
      'Favorite sport',
      'Favorite fruit',
    ]
    return questions[questionIndex]
  }

  async saveAnswer(userId: number, questionIndex: number, answer: string): Promise<void> {
    const quiz = await this.quizRepository.findOne({where: {user: {id: userId}}});
    if (!quiz) {
      throw new Error('Quiz not found');
    }
    switch (questionIndex) {
      case 0:
        quiz.answer1 = answer;
        break;
      case 1:
        quiz.answer2 = answer;
        break;
      case 2:
        quiz.answer3 = answer;
        break;
      case 3:
        quiz.answer4 = answer;
        break;
    }

    await this.quizRepository.save(quiz);
  }
}