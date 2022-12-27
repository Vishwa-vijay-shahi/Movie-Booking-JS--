import {fetchMovieAvailability,fetchMovieList} from "./api.js"

const movies = fetchMovieList()

console.log(movies)
