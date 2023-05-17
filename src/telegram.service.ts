import { Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';

@Injectable()
export class TelegramService {
    private bot: Telegraf;

    constructor() {
        this.bot = new Telegraf('5882659861:AAGXWzsNBsTwXXhYOjvJszQVC3zFZhftjYY');
        this.initializeBot()
    }

    private initializeBot() {
        this.bot.start((ctx) => ctx.reply('Привет, это мой бот!'));
        
        this.bot.command('start', (ctx) => {
            const keyboard = {
                reply_markup: {
                    inline_keyboard: [
                        [{text: 'Start quiz', callback_data: 'click_btn'}]
                    ]
                }
            }
            ctx.reply('Click the button below to start the quiz', keyboard)
        })
        
        this.bot.action('click_btn', (ctx) => {
            ctx.reply(`Okay, let's start`)
        })
    }

    public async launchBot() {
        await this.bot.launch()
        console.log('Bot is started')
    }
}