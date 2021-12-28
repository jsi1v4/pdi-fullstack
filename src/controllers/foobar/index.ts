import { Request, Response } from 'express';

export function Index(req: Request, res: Response) {
  res.status(200).json({ foo: 'bar' });
}

export default Index;
