import express from 'express';

import middlewares from './middlewares/middlewares';
// import middleares from './middlewares/middlewares';

// inicialization
const app = express();

// settings
app.set('port', process.env.PORT || 3001);

// middlewares
app.use(middlewares);

export default app;