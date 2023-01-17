import mongoose from 'mongoose';

export const connectToDb = (url: string) => {
    mongoose.connect(url);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log('Connected to MongoDB');
    });
  };
  