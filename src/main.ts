import app from "./app/app";

async function bootstrap() {
  const server = await app.createApp();

  await server.listen(3001);
}

bootstrap();