import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function createApp() {
  const app = await NestFactory.create(AppModule)

  // Nest app configuration

  return app;
}

export default { createApp };