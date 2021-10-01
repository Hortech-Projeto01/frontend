import ApiEndpoints from "core/constants/ApiEndpoints";
import { ServiceBase } from "core/service/ServiceBase";
import axios from "axios";

export default class AuthService extends ServiceBase {
  loginEndpoint = ApiEndpoints.auth.login;
  signupEndpoint = ApiEndpoints.auth.signup;

  constructor() {
    super(ApiEndpoints.auth.login);
  }

  login(user) {
    return axios.post(`${this.baseUrl}${this.loginEndpoint}`, user);
  }

  signup(newUser) {
    return axios.post(`${this.baseUrl}${this.loginEndpoint}`, newUser);
  }
}
