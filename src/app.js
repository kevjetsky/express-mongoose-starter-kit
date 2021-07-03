import express from 'express';

import middlewares from './middlewares/middlewares';
import routes from './routes';

// inicialization
const app = express();

// settings
app.set('port', process.env.PORT || 3001);

// middlewares
app.use(middlewares);

// routes
app.use(routes);

export default app;