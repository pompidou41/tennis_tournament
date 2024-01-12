import type { Action } from '../../../redux/type';
import type { Tournament } from '../tournamentType';

export type StateTournaments = {
  tournaments: Tournament[];
  tournament: Tournament;
};

export const stateTournaments: StateTournaments = {
  tournaments: [],
  tournament: {},
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
    case 'load/tour':
      return {
        ...state,
        tournament: action.payload,
      };
    default:
      return state;
  }
};

export default reducerTournaments;
