import http from '../http-common'
import IGame from '../types/game.type'

class GamesService {
  getGames() {
    return http.get<IGame[]>(
      "/games",
      { params: { category: 'MOBA' } }
    );
  }
}

export default new GamesService()
