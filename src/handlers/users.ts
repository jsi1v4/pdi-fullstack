import { Handler, Request, Response } from 'express';

import db from '@/db';
import { User } from '@/models/user';
import { StatusCode } from '@/types';
import { removeId } from '@/utils';

export const listUsers: Handler = async (req: Request, res: Response) => {
  const data = await db<User>('users').where({ active: 1 });

  return res.status(StatusCode.Success).json({ data, message: 'success' });
};

export const createUser: Handler = async (req: Request<unknown, User>, res: Response) => {
  const user = req.body;

  try {
    const created = await db<User>('users').insert(user).returning('*');

    return res.status(StatusCode.Success).json({ created, message: 'success' });
  } catch (error) {
    return res.status(StatusCode.Error).json({ error, message: 'error' });
  }
};

export const updateUser: Handler = async (req: Request<{ id?: number }, User>, res: Response) => {
  const id = req.params.id;
  if (!Number(id)) {
    return res.status(StatusCode.Error).json({ error: 'param [id] is required', message: 'error' });
  }

  const user = removeId(req.body);

  try {
    const updated = await db<User>('users').where({ id }).update(user).returning('*');

    return res.status(StatusCode.Success).json({ updated, message: 'success' });
  } catch (error) {
    return res.status(StatusCode.Error).json({ error, message: 'error' });
  }
};

export const removeUser: Handler = async (req: Request<{ id?: number }>, res: Response) => {
  const id = req.params.id;
  if (!Number(id)) {
    return res.status(StatusCode.Error).json({ error: 'param [id] is required', message: 'error' });
  }

  try {
    const removed = await db<User>('users').where({ id }).update({ active: 0 }).returning('*');

    return res.status(StatusCode.Success).json({ removed, message: 'success' });
  } catch (error) {
    return res.status(StatusCode.Error).json({ error, message: 'error' });
  }
};
