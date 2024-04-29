import { default as axios } from "axios";
import apiKey from "./apiKey.js";
export default class FilmService {
  static async getBestFilms(limit = 4, page = 1) {
    const response = await axios.get(`https://api.kinopoisk.dev/v1.4/movie`, {
        params: {
          'rating.kp': '8-10',
          page: page,
          limit: limit,
          type: "movie",
          selectFields: ['id','name', 'rating','poster', 'year'],
          notNullFields: ['name','id','poster.url'],
          sortField: ['votes.kp','votes.imdb','rating.imdb', 'rating.kp'],
          sortType: [-1, -1, -1, -1]
        },
        headers: {
          'X-API-KEY': apiKey,
          'accept': 'application/json'
        }
      });
      
    return response;
  }


  static async getExactFilm(id) { 
    const response = await axios.get(`https://api.kinopoisk.dev/v1.4/movie/${id}`, {
      headers: {
        'X-API-KEY': apiKey,
        'accept': 'application/json'
      }
    });
    return response;
  }
}





