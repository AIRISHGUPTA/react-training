import {MovieActionTypes} from '../actions/moviesActions'

function moviesStore(state={},action)
{
  switch(action.type)
  {
    case MovieActionTypes.STORE_MOVIES:
      state = {movies:action.movies};
      break;
    case MovieActionTypes.CHANGE_RATING:
      state = {...state,['movies']:{
        ...state['movies'],
        [action.id]:{
          ...state['movies'][action.id],
          rating:action.rating
        }
      }}
      break;
  }
  return state;
}

export default moviesStore;
