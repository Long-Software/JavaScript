import express from 'express';
import demoRouter from './routes/demo';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

const app = express();

// Public files
app.use(express.static('../public'));

// Middlewares
app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));

// Routes
app.use('/demo', demoRouter);

app.use('*', (req: express.Request, res: express.Response) => {
  res.status(404).json({ msg: 'Endpoint not found' });
});

export default app;
