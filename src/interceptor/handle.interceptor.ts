import { NextFunction, Request, Response } from "express";

export const handleInterceptor = (req: Request, res: Response, next: NextFunction) => {
    console.log('[PATH] - ', req.path)
    next();
}
