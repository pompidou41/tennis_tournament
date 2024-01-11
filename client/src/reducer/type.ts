import type { Todo } from '../Features/Todos/typeTodo';

export type State = {
  todos: Todo[];
};
export type Action =
  | { type: 'load/todos'; payload: Todo[] }
  | { type: 'add/todos'; payload: Todo }
  | { type: 'delete/todos'; payload: number }
  | { type: 'update/todos'; payload: number };
