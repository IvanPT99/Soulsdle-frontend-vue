import http from "../http-common";

class AuthService {
  login(data: { email: string, password: string }) {
    return http.post(`/login/`, data);
  }
}

export default new AuthService;