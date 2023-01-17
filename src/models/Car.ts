import mongoose, { Schema, Document } from 'mongoose';

export interface Car extends Document {
  brand: string;
  model: string;
  year: number;
}

const carSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true }
});

export const Car = mongoose.model<Car>('Car', carSchema);
