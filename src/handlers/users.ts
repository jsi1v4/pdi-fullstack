import { Handler, Request, Response } from 'express';

import db from '@/db';
import { User } from '@/models/user';

export const listUsers: Handler = async (req: Request, res: Response) => {
  const users = await db<User>('users');

  return res.status(200).json({ data: users, message: 'success' });
};
