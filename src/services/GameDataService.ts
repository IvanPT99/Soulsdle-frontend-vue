import http from "../http-common";

class GameDataService {
  getLast() {
    return http.get('/games');
  }
}

export default new GameDataService;