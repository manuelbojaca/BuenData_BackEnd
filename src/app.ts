import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import userRoutes from '@src/routes/user.routes';

dotenv.config();
const app: Application = express();
const port: string | number = process.env.PORT || 5000;

app.set('port', port);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/api/users', userRoutes);

app.use('/', (_req, res) => {
  res.send('Buen Data Project Server');
});

export default app;
