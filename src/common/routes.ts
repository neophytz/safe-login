import { Router } from "express";
import { loginRouter } from "../app/login/login.routes";

export const allRoutes: Record<string, Router> = {
    'auth': loginRouter
}
