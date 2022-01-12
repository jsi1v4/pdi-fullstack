import { Handler, Request, Response } from 'express';

export const listUsers: Handler = async (req: Request, res: Response) => {
  const users = [
    { id: 1, name: 'John Doe', age: 27 },
    { id: 2, name: 'John Doe 2', age: 34 },
  ];

  return res.status(200).json({ data: users, message: 'success' });
};
