import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import ReactTrainingHomeReducer from './reactTrainingReducer';
import { routerReducer } from 'react-router-redux';
import moviesStore from './moviesStoreReducer'
const rootReducer = combineReducers({
  fuelSavings,
  routing: routerReducer,
  reactTrainingStore: ReactTrainingHomeReducer,
  moviesStore
});

export default rootReducer;
