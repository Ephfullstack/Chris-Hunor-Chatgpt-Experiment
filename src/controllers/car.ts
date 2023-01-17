import { Request, Response } from 'express';
import { Car } from '../models/Car';

export const createCar = async (req: Request, res: Response) => {
  const { brand, model, year } = req.body;
  const car = new Car({ brand, model, year });
  await car.save();
  res.status(201).json(car);
};

export const getCars = async (req: Request, res: Response) => {
  const cars = await Car.find();
  res.json(cars);
};

export const getCar = async (req: Request, res: Response) => {
  const car = await Car.findById(req.params.id);
  if (!car) res.status(404).json({ message: 'Car not found' });
  res.json(car);
};

export const updateCar = async (req: Request, res: Response) => {
  const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  if (!car) res.status(404).json({ message: 'Car not found' });
  res.json(car);
};

export const deleteCar = async (req: Request, res: Response) => {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) res.status(404).json({ message: 'Car not found' });
    res.json(car);
  };
  