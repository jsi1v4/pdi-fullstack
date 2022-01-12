import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { listUsers } from '@/handlers/users';

const router = Router();

router.get('/', asyncHandler(listUsers));

export default router;
