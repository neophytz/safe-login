import { lazy } from "react";

export const Home = lazy(() => import('./home.view'))
export const Login = lazy(() => import('./login.view'))
export const Signup = lazy(() => import('./signup.view'))
