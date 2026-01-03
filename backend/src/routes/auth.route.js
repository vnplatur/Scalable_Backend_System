import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";
import { registerValidator, loginValidator } from "../validators/auth.validator.js";
import validate from "../middelware/validate.middleware.js";

const authRouter = Router();

authRouter.post("/register", registerValidator, validate, register);
authRouter.post("/login", loginValidator, validate, login);

export default authRouter;
