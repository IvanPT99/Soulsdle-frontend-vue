import http from "../http-common";
import { User } from "../types";

class FriendDataService {
  getAll(user_id: number) {
    return http.get(`/users/${user_id}/friends`);
  }

  create(user_id: number, data: User) {
    return http.post(`/users/${user_id}/friends/`, data);
  }

  delete(user_id: number, id: number) {
    return http.delete(`/users/${user_id}/friends/${id}`)
  }
}

export default new FriendDataService;