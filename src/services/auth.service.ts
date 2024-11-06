import jwt from 'jsonwebtoken';
import { CONFIG } from '../config/config';
import User from '../models/user.model';
import AppError from '../utils/appError';
import { IUser } from '../interfaces/user.interface';

export const generateToken = (id: string): string => {
  return jwt.sign({ id }, CONFIG.JWT_SECRET, {
    expiresIn: CONFIG.JWT_EXPIRES_IN,
  });
};

export const signup = async (userData: Partial<IUser>) => {
  const user = await User.create(userData);
  const token = generateToken(user._id);
  return { user, token };
};

export const login = async (email: string, password: string) => {
  const user = await User.findOne({ email }).select('+password');
  
  if (!user || !(await user.comparePassword(password))) {
    throw new AppError('Email o contraseña incorrectos', 401);
  }

  const token = generateToken(user._id);
  return { user, token };
};
