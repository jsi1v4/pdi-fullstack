import { Handler, Request, Response } from 'express';

import db from '@/db';
import { User } from '@/models/user';
import { StatusCode, WithID } from '@/types';
import { withoutID, requireID } from '@/utils';

export const listUsers: Handler = async (req: Request, res: Response) => {
  const data = await db<User>('users').where({ active: 1 });

  return res.status(StatusCode.Success).json({ data, message: 'success' });
};

export const getUserById: Handler = async (req: Request<WithID>, res: Response) => {
  try {
    const id = requireID()(req.params);
    const data = await db<User>('users').where({ id });
    return res.status(StatusCode.Success).json({ data, message: 'success' });
  } catch (error) {
    return res.status(StatusCode.Error).json({ error, message: 'error' });
  }
};

export const createUser: Handler = async (req: Request<unknown, User>, res: Response) => {
  try {
    const user = withoutID()(req.body);
    const created = await db<User>('users').insert(user).returning('*');

    return res.status(StatusCode.Success).json({ created, message: 'success' });
  } catch (error) {
    return res.status(StatusCode.Error).json({ error, message: 'error' });
  }
};

export const updateUser: Handler = async (req: Request<WithID, User>, res: Response) => {
  try {
    const id = requireID()(req.params);
    const user = withoutID()(req.body);
    const updated = await db<User>('users').where({ id }).update(user).returning('*');

    return res.status(StatusCode.Success).json({ updated, message: 'success' });
  } catch (error) {
    return res.status(StatusCode.Error).json({ error, message: 'error' });
  }
};

export const removeUser: Handler = async (req: Request<WithID>, res: Response) => {
  try {
    const id = requireID()(req.params);
    const removed = await db<User>('users').where({ id }).update({ active: 0 }).returning('*');

    return res.status(StatusCode.Success).json({ removed, message: 'success' });
  } catch (error) {
    return res.status(StatusCode.Error).json({ error, message: 'error' });
  }
};
