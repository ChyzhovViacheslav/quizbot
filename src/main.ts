import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TelegramService } from './telegram.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const telegramSevice = app.get(TelegramService)
  await telegramSevice.launchBot()
  await app.listen(3000);
}

bootstrap();
