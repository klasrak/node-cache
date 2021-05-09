import { bodyParser, contentType, cors, logger } from '../middlewares';

export default app => {
  app.use(bodyParser);
  app.use(contentType);
  app.use(logger);
  app.use(cors);
};
