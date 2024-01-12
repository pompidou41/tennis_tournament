import { combineReducers } from 'redux';
import reducerTournaments from '../Features/tournaments/reducer/reducerTournament';
import reducerAuth from '../features/auth/reducer/reducerAuth';

const rootReducer = combineReducers({
  tournaments: reducerTournaments,
  auth: reducerAuth,
});

export default rootReducer;
