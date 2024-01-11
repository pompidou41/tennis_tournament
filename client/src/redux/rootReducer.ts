import { combineReducers } from 'redux';
import reducerTournaments from '../Features/tournaments/reducer/reducerTournament';

const rootReducer = combineReducers({
  tournaments: reducerTournaments,
});

export default rootReducer;
