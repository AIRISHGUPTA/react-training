import * as API from '../utils/api'

const MovieActionTypes ={
  STORE_MOVIES : "MOVIES/STORE_MOVIES",
  CHANGE_RATING : "MOVIES?CHANGE_RATING"
}
const MovieActions={
  fetchMoviesFromApi : () => (dispatch,getState) => {
    API.getMovies().then((movies)=>{dispatch(MovieActions.storeMovies(movies))});
  },
  storeMovies : (movies) => {
    return {type:MovieActionTypes.STORE_MOVIES,movies};
  },
  changeRating : (id,rating) => {
    return {type:MovieActionTypes.CHANGE_RATING,id,rating}
  }
}

export {MovieActionTypes,MovieActions};
