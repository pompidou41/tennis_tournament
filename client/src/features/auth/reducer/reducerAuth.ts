
import type{ Action } from "../../../redux/type";
import type{ StateAuth } from "./type";

const stateAuth : StateAuth = {
    user: undefined,
};

 const reducerAuth = (state: StateAuth = stateAuth, action: Action) : StateAuth=> {
    switch (action.type) {
        case 'auth/registration':
          return {
            ...state,
            user: action.payload,
          };
    
        case 'auth/userCheck':
          return {
            ...state,
            user: action.payload,
          };
        case 'auth/logout':
          if (action.payload.message === 'logout') {
            return {
              ...state,
              user: undefined,
            };
          }
          return {
            ...state,
          };
        case 'auth/login':
          return {
            ...state,
            user: action.payload,
          };
        default:
          return state;
      }
    };
export default  reducerAuth