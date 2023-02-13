import { Router } from "express";
import { loginRouter } from "../app/login/login.routes";
import { AdminAuthMiddleware } from "../middleware/auth.middleware";

export const allRoutes: Record<string, Router> = {
    'auth': loginRouter
}

export const _router = {
    'auth': {
        router: loginRouter,
        middlware: [
            AdminAuthMiddleware
        ]
    }
}
