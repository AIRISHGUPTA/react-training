import * as API from '../utils/api'
export const STORE_MOVIES = "MOVIES/STORE_MOVIES"
export const CHANGE_RATING = "MOVIES?CHANGE_RATING"
export const fetchMoviesFromApi = () => (dispatch,getState) => {
  API.getMovies().then((movies)=>{dispatch(storeMovies(movies))});
}

export const storeMovies = (movies) => {
  return {type:STORE_MOVIES,movies};
}

export const changeRating = (id,rating) => {
  return {type:CHANGE_RATING,id,rating}
}
