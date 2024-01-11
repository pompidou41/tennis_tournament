import type { Tournament } from '../Features/tournaments/tournamentType';

export type Action = { type: 'load/tournaments'; payload: Tournament[] };
