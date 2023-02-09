import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { http_formatter } from "../../util";
import {z} from 'zod';

// ? RULES FOR VALIDATION.
export const LoginValidator = z.object({
    firstName: z.string().min(2).max(50).trim(),
    lastName: z.string().optional(),
    userName: z.string().min(2).max(50).trim(),
    password: z.string().min(4),
    isDeleted: z.boolean().default(false).optional()
})

// * MIDDLEWARE FOR VALIDATION.
export const loginValidatorMiddlware = (req: Request, res: Response, next: NextFunction) => {
    const isValid = LoginValidator.safeParse(req.body);
    if(isValid.success) {
        next();
    } else {
        return res.status(StatusCodes.BAD_REQUEST).json(
            http_formatter(isValid.error, "Teacher validation failed, please check", false)
        )
    }
}
