import http from "../http-common";

class PlayDataService {
  getAll(user_id: number) {
    return http.get(`/users/${user_id}/plays`);
  }

  get(game_id: number, user_id: number) {
    return http.get(`/plays`, { params: { game_id, user_id } });
  }

  create(game_id: number, user_id: number, boss_id: number) {
    return http.post(`/plays`, [game_id, user_id, boss_id]);
  }

  update(id: number, data) {
    return http.put(`/plays/${id}`, data);
  }
}

export default new PlayDataService;