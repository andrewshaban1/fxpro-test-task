import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { HttpError } from '../utils/error';

export const Hello = async (req: Request, res: Response) => {
  const userName = req.query['user-name'];

  if (!userName) {
    throw new HttpError(
      StatusCodes.BAD_REQUEST,
      '"user-name" query parameter is required'
    );
  }

  res.status(StatusCodes.OK).json(`Hello ${userName}!`);
};
