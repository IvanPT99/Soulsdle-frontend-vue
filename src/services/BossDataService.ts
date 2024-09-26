import http from "../http-common";

class BossDataService {
  getAll() {
    return http.get('/bosses');
  }

  get(id: number) {
    return http.get(`/bosses/${id}`);
  }
}

export default new BossDataService;