import {MovieActionTypes} from '../actions/moviesActions'

function moviesStore(state={},action)
{
  switch(action.type)
  {
    case MovieActionTypes.STORE_MOVIES:
      return {movies:action.movies};

    case MovieActionTypes.CHANGE_RATING:
      return {...state,['movies']:{
        ...state['movies'],
        [action.id]:{
          ...state['movies'][action.id],
          rating:action.rating
        }
      }}
  }
}

export default moviesStore;
