import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { listUsers, getUserById, createUser, updateUser, removeUser } from '@/handlers/users';

const router = Router();

router.get('/', asyncHandler(listUsers));
router.put('/', asyncHandler(createUser));
router.get('/:id', asyncHandler(getUserById));
router.patch('/:id', asyncHandler(updateUser));
router.delete('/:id', asyncHandler(removeUser));

export default router;
