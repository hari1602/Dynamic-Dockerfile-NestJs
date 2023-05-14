import { NestFactory } from '@nestjs/core';
import { FirstAppModule } from './first-app.module';

async function bootstrap() {
  const app = await NestFactory.create(FirstAppModule);
  await app.listen(3000);
}
bootstrap();
