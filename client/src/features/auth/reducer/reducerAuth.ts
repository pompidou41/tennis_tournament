import type { Action } from '../../../redux/type';
import type { StateAuth } from './type';

const stateAuth: StateAuth = {
  user: undefined,
};

const reducerAuth = (state: StateAuth = stateAuth, action: Action): StateAuth => {
  switch (action.type) {
    case 'auth/registration':
      console.log(action.payload, 1);

      return {
        ...state,
        user: action.payload,
      };

    case 'auth/userCheck':
      console.log(action.payload, 2);
      return {
        ...state,
        user: action.payload,
      };
    case 'auth/logout':
      return {
        ...state,
        user: undefined,
      };
    case 'auth/login':
      console.log(action.payload, 3);
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default reducerAuth;
