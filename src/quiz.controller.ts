import { Controller, Get } from "@nestjs/common";
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

