import * as API from '../utils/api'
import * as types from '../constants/actionTypes'
const fetchMoviesFromApi = () => (dispatch,getState) => {
  API.getMovies().then((movies)=>{dispatch(storeMovies(movies))});
}

const storeMovies = (movies) => {
  return {type:types.STORE_MOVIES,movies};
}

const changeRating = (id,rating) => {
  return {type:types.CHANGE_RATING,id,rating}
}
export {fetchMoviesFromApi,storeMovies,changeRating};
