import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Quiz } from './quiz.entity';
import { QuizModule } from './quiz.module';

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
    QuizModule
  ],
})
export class AppModule {}
