import { Router } from "express";
import { userRouter } from "./user-routes.js";

const router = Router();

// Prefix all routes defined in `bookRoutes.js` with `/books
// router.use('/books', bookRouter);
router.use("/users", userRouter);

export default router;

// activity 14.05
