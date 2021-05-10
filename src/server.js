import { RedisHelper } from './redis';

async function startServer() {
  await RedisHelper.connect();
  const app = (await import('./config/app')).default;
  app.listen(3000, () => console.log('Server listening...'));
}

startServer();
