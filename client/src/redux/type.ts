import type { Tournament } from '../features/tournaments/tournamentType';
import type { User } from '../features/auth/reducer/type';

export type Action =
  | { type: 'load/tournaments'; payload: Tournament[] }
  | { type: 'auth/registration'; payload: User }
  | { type: 'auth/userCheck'; payload: User }
  | { type: 'auth/login'; payload: User }
  | { type: 'auth/logout'; payload: { message: string } }
  | { type: 'load/tour'; payload: Tournament };
