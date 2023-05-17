import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { Quiz } from './quiz.entity';
import { TelegramService } from './telegram.service';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, User])],
  controllers: [QuizController],
  providers: [TelegramService, QuizService, UserRepository],
})
export class QuizModule {}