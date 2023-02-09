import { Request, Response, Router } from "express";
import { _loginController } from "./login.controller";
import { loginValidatorMiddlware } from "./login.validator";

export const loginRouter = Router();

loginRouter.post('/signup', loginValidatorMiddlware, (req: Request, res: Response ) => _loginController.create(res, req.body));