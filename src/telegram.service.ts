import { Injectable } from '@nestjs/common';
import { Markup, Telegraf } from 'telegraf';
import { QuizService } from './quiz.service';
import { Message } from 'nestjs-telegraf';

@Injectable()
export class TelegramService {
    private bot: Telegraf;
    private questionIndex: number;

    constructor(private readonly quizService: QuizService) {
        this.bot = new Telegraf('5882659861:AAGXWzsNBsTwXXhYOjvJszQVC3zFZhftjYY');
        this.initializeBot()
    }

    private initializeBot() {
        this.bot.start(async (ctx) => {
            if (ctx.message) {
                const keyboard = Markup.inlineKeyboard([
                    Markup.button.callback('Start quiz', 'start_quiz')
                ])
                ctx.reply('To start quiz press the button', keyboard)
            }
        })

        this.bot.action('start_quiz', async (ctx) => {
            const userId = ctx.from.id;
            this.questionIndex = 0;
            await this.quizService.createQuiz(userId)
            await this.askQuestion(ctx)
        })

        this.bot.on('text', async (ctx) => {
            const userId = ctx.from.id;
            if (userId && this.questionIndex >= 0 && this.questionIndex < 4) {
                const answer = `${ctx.message.text}`
                await this.quizService.saveAnswer(userId, this.questionIndex, answer);
                this.questionIndex++;
                await this.askQuestion(ctx);
            }
        })
    }

    private async askQuestion(ctx) {
        if (this.questionIndex < 4) {
            const question = await this.quizService.getQuestion(this.questionIndex)
            await ctx.reply(question);
        } else {
            this.finishQuiz(ctx)
        }
    }

    private async finishQuiz(ctx) {
        await ctx.reply('Quiz ended');
    }

    public async launchBot() {
        await this.bot.launch()
    }
}