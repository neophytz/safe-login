import { NextFunction, Request, Response } from "express";
import { BaseController } from "../../common/base.controller"
import { ILogin, Login } from "./login.schema"
import * as bcrypt from 'bcrypt';
import { StatusCodes } from "http-status-codes";

class LoginController extends BaseController<ILogin>{
    /**
     * middleware to encrypt the password present in req.body
     * @param req : Request
     * @param res Response
     * @param next NextFunction
     */
    public encryptPassword = (req: Request, res: Response, next: NextFunction) => {
        if (!req.body.password) { // over kill.
            return this.errorHandler(res, new Error("Password is required"), StatusCodes.BAD_REQUEST);
        }

        bcrypt.hash(req.body.password, 10, (err, hash) => {
            // Store hash in your password DB.
            if(err) {
                return this.errorHandler(res, err, StatusCodes.INTERNAL_SERVER_ERROR)
            }
            req.body.password = hash;
            delete req.body.confirmPassword;
            next()
        });
    }
}

export const _loginController = new LoginController(Login);