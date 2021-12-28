import { Router } from 'express';

import Foobar from '@/controllers/foobar';

export default function () {
  const router = Router();

  router.get('/foobar', Foobar);

  return router;
}
