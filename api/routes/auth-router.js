import express from "express";
import { signin, signup, google, signout } from "../controllers/auth/index.js";

const authRouter = express.Router();

authRouter.post("/signup", signup)
authRouter.post("/signin", signin);
authRouter.post("/google", google);
authRouter.get("/signout", signout);

export default authRouter;