import type { Action } from '../../../redux/type';
import type { Tournament } from '../tournamentType';

export type StateTournaments = {
  tournaments: Tournament[];
};

export const stateTournaments: StateTournaments = {
  tournaments: [],
};

const reducerTournaments = (
  state: StateTournaments = stateTournaments,
  action: Action,
): StateTournaments => {
  switch (action.type) {
    case 'load/tournaments':
      return {
        ...state,
        tournaments: action.payload,
      };
    default:
      return state;
  }
};

export default reducerTournaments;
