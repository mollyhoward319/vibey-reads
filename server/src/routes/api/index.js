import { Router } from 'express';
import bookrouter from './booksroutes.js';

const router = Router();

// Prefix all routes defined in `bookroutes.js` with `/books
router.use('/books', bookrouter);

export default router;

// activity 14.05

// todo: include router for music