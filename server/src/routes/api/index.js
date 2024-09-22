import { Router } from "express";
import { userRouter } from "./user-routes.js";
import { bookRouter } from "./booksroutes.js";
import { musicRouter } from "./spotifyRoutes.js";

const router = Router();

router.use("/users", userRouter); // Prefix all routes defined in `userRoutes.js` with `/users`
router.use("/books", bookRouter); // Prefix all routes defined in `bookRoutes.js` with `/books
router.use("/music", musicRouter); // Prefix all routes defined in "spotifyRoutes.js" with /music

export default router;

