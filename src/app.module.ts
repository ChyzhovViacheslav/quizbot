import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Quiz } from './quiz.entity';
import { QuizRepository } from './quiz.repository';
import { TelegramService } from './telegram.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql8.freemysqlhosting.net',
      port: 3306,
      username: 'sql8619003',
      password: '3SNALiCLdD',
      database: 'sql8619003',
      entities: [User, Quiz],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Quiz, User, QuizRepository]),
  ],
  providers: [TelegramService]
})
export class AppModule {}
