import type { Action, State } from './type';

export const initState: State = {
  todos: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'load/todos':
      return {
        ...state,
        todos: action.payload,
      };
    case 'add/todos':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'delete/todos':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'update/todos':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo,
        ),
      };
    default:
      return state;
  }
};
