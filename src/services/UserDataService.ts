import http from "../http-common";
import { User } from "../types";

class UserDataService {
  getAll() {
    return http.get('/users');
  }

  get(id: number) {
    return http.get(`/users/${id}`);
  }

  create(data: User) {
    return http.post(`/users`, data);
  }

  update(id: number, data: User) {
    return http.put(`/users/${id}`, data);
  }

  delete(id: number) {
    return http.delete(`/users/${id}`)
  }
}

export default new UserDataService;