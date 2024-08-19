import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const PORT = 8000;
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () => {
    console.log(`App start with port http://localhost:${PORT}`);

  })
}

bootstrap();