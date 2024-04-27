import { default as axios } from "axios";
import apiKey from "./apiKey.js";
export default class FilmService {
  static async getBestFilms(limit = 4, page = 1) {
    const response = await axios.get(`https://api.kinopoisk.dev/v1.4/movie`, {
        params: {
          'rating.kp': '8-10',
          page: page,
          limit: limit,
          selectFields: ['id','name', 'type', 'year', 'rating', 'releaseYears','rating.kp','genres', 'poster'],
          notNullFields: ['id', 'top250','rating.kp','movieLength'],
          type: "movie",
          sortField: ['rating.kp', 'votes'],
          sortType: [-1, -1]
        },
        headers: {
          'X-API-KEY': apiKey,
          'accept': 'application/json'
        }
      });
      
    return response;
  }

  static async getFilm(limit = 1, page = 1, id) {
    const response = await axios.get(`https://api.kinopoisk.dev/v1.4/movie`, {
        params: {
          'rating.kp': '8-10',
          'id':{id}, // запрос с таким id
          page: page,
          limit: limit,
          selectFields: ['name', 'type', 'year', 'rating', 'releaseYears','rating.kp','genres', 'poster', 'movieLength']
        },
        headers: {
          'X-API-KEY': apiKey,
          'accept': 'application/json'
        }
      });
      
    return response;
  }
}





