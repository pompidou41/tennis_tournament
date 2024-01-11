import type { Action, State } from './reducer/type';
import { initState } from './reducer/reducer';

export type Context = { state: State; dispatch: Dispatch<Action> };

export const stateContext: Context = { state: initState, dispatch: () => {} };

export const AppContext = createContext(stateContext);
