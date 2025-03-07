import { Request } from 'express';

export interface IGetUserAuthInfoRequest extends Request {
  user?: {
    email: string;
    password: string;
  };
}