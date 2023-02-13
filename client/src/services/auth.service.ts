import { AxiosResponse } from "axios";
import { ILogin, ISignup } from "../types";
import { http } from "./http.service";
import { getAuthToken, removeAuthToken } from "./storage.service";
import jwt_decode from 'jwt-decode';

type SignupResponse = {
    success: boolean,
    message: string
}

type LoginResponse = {
    data: {
        token: string
    },
    success: boolean,
    message: string
}

export const signup = async (data: ISignup): Promise<AxiosResponse<SignupResponse>> => { 
    return await http.post('/auth/signup', data);
}

export const login = async (data: ILogin): Promise<AxiosResponse<LoginResponse>> => {
    return await http.post('/auth/login', data);
}

export const isAuthenticated = (): boolean => {
    // optional - if needed your can check it from backend side as well.
    // check from backend side will introduce latency.
    const token = getAuthToken();
    if(!token) return false;
    
    const decodedToken: any = jwt_decode(token);
    // date.getTime() is in milliseconds and thus we've got to divide by 1000
    return (decodedToken.exp > new Date().getTime()/1000)
}

export const logout = (): void => {
    removeAuthToken()
}