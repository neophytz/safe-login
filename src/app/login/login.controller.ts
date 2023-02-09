import { BaseController } from "../../common/base.controller"
import { ILogin, Login } from "./login.schema"

class LoginController extends BaseController<ILogin>{}
export const _loginController = new LoginController(Login);