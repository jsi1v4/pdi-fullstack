import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { listUsers, createUser, updateUser, removeUser } from '@/handlers/users';

const router = Router();

router.get('/', asyncHandler(listUsers));
router.put('/', asyncHandler(createUser));
router.patch('/:id', asyncHandler(updateUser));
router.delete('/:id', asyncHandler(removeUser));

export default router;
