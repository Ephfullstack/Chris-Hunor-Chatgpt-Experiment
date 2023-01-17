import express from 'express';
import bodyParser from 'body-parser';
import { connectToDb } from './config';
import carRoutes from './routes/car';
import { Request, Response } from 'express';

const app = express();

app.use(bodyParser.json());
app.use('/cars', carRoutes);

app.get('/', (req: Request, res: Response) => {
    res.json('Welcome to Christians and Hunors API');
})

const PORT = process.env.PORT || 3000;

connectToDb('mongodb://root:rootpassword@localhost:27017/chris_hunor_mongodb?authSource=admin');
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
