import express from 'express';
import bodyParser from 'body-parser';
import { connectToDb } from './config';
import carRoutes from './routes/car';

const app = express();

app.use(bodyParser.json());
app.use('/cars', carRoutes);

const PORT = process.env.PORT || 3000;

connectToDb('mongodb://localhost:27017/chris_hunor_mongodb');
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
