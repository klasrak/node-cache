import { Router } from 'express';
import { readdirSync } from 'fs';

export default app => {
  const router = Router();
  app.use('/api', router);

  readdirSync(`${__dirname}/../routes`).map(async file => {
    (await import(`../routes/${file}`)).default(router);
  });
};
