import { Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';

@Injectable()
export class TelegramService {
    private bot: Telegraf;

    constructor() {
        this.bot = new Telegraf('5882659861:AAGXWzsNBsTwXXhYOjvJszQVC3zFZhftjYY');  
        this.setupCommands();
        this.startPolling();
    }

    private setupCommands() {
        this.bot.start((ctx) => {
            const userId = ctx.from.id;
            ctx.reply(`Hello ${userId}`)
        });
        this.bot.hears('Привет', (ctx) => {
            const userId = ctx.from.id;
            ctx.reply('Hi')
        })
    }

    private startPolling() {
        this.bot.launch()
            .then(() => console.log('Telegram bot started'))
            .catch((err) => console.error('Error starting Telegram bot', err));
    }
}