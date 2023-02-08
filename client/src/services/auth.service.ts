import { AxiosResponse } from "axios";
import { ILogin, ISignup } from "../types";
import { http } from "./http.service";

type SignupResponse = {
    success: boolean,
    message: string
}

type LoginResponse = {
    token: string,
    success: boolean,
    message: string
}

export const signup = async (data: ISignup): Promise<AxiosResponse<SignupResponse>> => { 
    return await http.post('/signup', data);
}

export const login = async (data: ILogin): Promise<AxiosResponse<LoginResponse>> => {
    return await http.post('/login', data);
}
