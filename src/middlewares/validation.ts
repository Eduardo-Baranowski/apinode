import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

export const registerValidation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const schema = {
    name: Joi.string().min(6).required(),
    telefone: Joi.string().min(11).required(),
    email: Joi.string().min(6).required().email(),
    idade: Joi.number().min(2).required(),
    peso: Joi.number().min(2).required(),
    etnia: Joi.string().allow('', 'branco', 'negro', 'pardo'),
    password: Joi.string().min(6).required(),
  };
  try {
    await Joi.validate(req.body, schema);
    return next();
  } catch (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
};

export const loginValidation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const schema = {
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  };
  try {
    await Joi.validate(req.body, schema);
    return next();
  } catch (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  
};
