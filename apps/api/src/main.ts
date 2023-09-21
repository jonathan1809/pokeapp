import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import * as csurf from 'csurf';

async function main() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  // app.use(csurf());
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT);
}
main();
