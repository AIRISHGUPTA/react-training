
import * as types from '../constants/actionTypes'
export default function moviesStore(state={},action)
{
  switch(action.type)
  {
    case types.STORE_MOVIES:
      state = {movies:action.movies};
      break;
    case types.CHANGE_RATING:
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
