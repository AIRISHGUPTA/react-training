import {STORE_MOVIES,CHANGE_RATING} from '../actions/moviesActions'

export default function moviesStore(state={},action)
{
  switch(action.type)
  {
    case STORE_MOVIES:
      state = {movies:action.movies};
      break;
    case CHANGE_RATING:
      //state = {...state,['movies']:{...['movies'],[action.id]:{rating:action.rating}}};
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
