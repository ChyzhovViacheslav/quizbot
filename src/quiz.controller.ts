import { Body, Controller, Get, Post } from "@nestjs/common";
import { QuizService } from "./quiz.service";
import { CreateQuizDto } from "./dto/createquix.dto";
import { TelegramService } from "./telegram.service";

@Controller('quiz')
export class QuizController {
    constructor(private readonly telegramService: TelegramService) { }

    @Get('start')
    async startQuiz() {
        await this.telegramService.launchBot();
        return 'Quiz started';
    }
}

