import { default as axios } from "axios";
import apiKey from "./apiKey.js";
export default class FilmService {
  static async getBestFilms(limit = 4, page = 1) {
    // const response = await axios.get("https://api.kinopoisk.dev/v1.4/movie", {
    //   params: {
    //     page: page,
    //     limit: limit,
    //     selectFields: "name,id,rating,releaseYears,poster",
    //     notNullFields: "rating.kp,name,top250",
    //     "rating.kp": "8-10",
    //     "votes.kp": "2000-1000000",
    //   },
    //   headers: {
    //     "X-API-KEY": apiKey,
    //     accept: "application/json",
    //   },
    // });
    // const response = await axios.get(`https://api.kinopoisk.dev/v1.4/movie?rating.kp=8-10&page=2&limit=${limit}&selectFields=name&selectFields=year`, { headers: { 'X-API-KEY': apiKey } });
    const response = await axios.get(`https://api.kinopoisk.dev/v1.4/movie`, {
        params: {
          'rating.kp': '8-10',
          page: page,
          limit: limit,
          selectFields: ['name', 'year', 'rating']
        },
        headers: {
          'X-API-KEY': apiKey,
          'accept': 'application/json'
        }
      });
    return response;
  }
}
