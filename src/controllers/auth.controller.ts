import { Request, Response, NextFunction } from 'express';
import { catchAsync } from '../utils/catchAsync';
import * as authService from '../services/auth.service';
import AppError from '../utils/appError';

export const signup = catchAsync(async (req: Request, res: Response) => {
  const { user, token } = await authService.signup(req.body);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
});

export const login = catchAsync(async (req: Request, res: Response, NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError('Por favor proporciona email y contraseña', 400);
  }

  const { user, token } = await authService.login(email, password);

  res.status(200).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
});
