/** @format */
import 'dotenv/config';
import express from 'express';
import connect from './config/db';

import logger from './utils/logger';

const app = express();

app.listen(process.env.PORT, async () => {
  logger.info(`listening to port ${process.env.PORT}`);
  await connect();
});
