import express from 'express';
import dotenv from 'dotenv';

import middlewares from './middlewares/middlewares';
import routes from './routes';

// inicialization
const app = express();
dotenv.config();

// settings
app.set('port', process.env.PORT || 3001);

// middlewares
app.use(middlewares);

// routes
app.use('/api', routes);

export default app;